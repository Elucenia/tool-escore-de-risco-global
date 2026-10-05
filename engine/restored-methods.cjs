'use strict';
// Own implementations of explicitly versioned methods. Scientific and language
// review remain unsigned. No treatment, referral or diagnostic verdict is emitted.
// This archived, read-only source inventory is independent of generated public
// metadata. Re-running the content migration must never duplicate input fields.
const original=require('./restoration-original-tools.json');
const definitions={};
const num=(id,label,min,max,unit,extra={})=>[id,label,'num',{min,max,unit,...extra}];
const select=(id,label,opts)=>[id,label,'sel',{opts}];
const yesno=(id,label)=>select(id,label,{'0':'Não','1':'Sim'});
const adult=num('idade','Idade',18,110,'anos');
const context=label=>yesno('contexto',label);
const ok=(a)=>{if(a.contexto!=='1')throw new DomainError('contexto','Confirme a população e as condições de aplicação da versão selecionada.');};
class DomainError extends Error{constructor(field,message){super(message);this.field=field;}}
const f=(value,places=2)=>value.toLocaleString('pt-BR',{minimumFractionDigits:places,maximumFractionDigits:places});
const out=(value,unit,label,raw,places=2)=>({main:[typeof value==='number'?f(value,places):value,unit],label,raw});
function define(id,version,fields,formula,limits,calculate,additionalSources=[]){
 const source=original.find(t=>t.id===id);if(!source)throw Error('Unknown method '+id);
 definitions[id]={id,title:source.title,fields,version,formula,limits,sources:[...source.sources,...additionalSources],calculate};
}
const fields=id=>structuredClone(original.find(t=>t.id===id).fields);
const omit=(id,names)=>fields(id).filter(field=>!names.includes(field[0]));
const cite=(title,url)=>[title,url];

const waterFields=id=>omit(id,['meta']).map(row=>row[0]==='peso'?[...row.slice(0,3),{...row[3],min:30}]:row[0]==='grupo'?[row[0],'Fração estimada de água corporal total','sel',{opts:{'0.6':'0,60','0.5':'0,50','0.45':'0,45'}}]:row);

define('escore-de-risco-global','Framingham General CVD 2008; modelo contínuo com lipídios, histórico',
 [...fields('escore-de-risco-global').map(row=>row[0]==='idade'?[...row.slice(0,3),{...row[3],max:74}]:row),context('Sem doença cardiovascular estabelecida; uso da versão histórica Framingham 2008 confirmado?')],
 'Risco em 10 anos = 100 × [1 − S₀^exp(ΣβX − média)]. Coeficientes por sexo do modelo contínuo com idade, colesterol total, HDL, PAS tratada/não tratada, tabagismo e diabetes.',
 'População original de 30–74 anos sem doença cardiovascular. Não representa PREVENT nem diretriz SBC 2025. Não aplica metas lipídicas ou tratamentos. A calibração local exige conferência.',
 a=>{ok(a);const male=a.sexo==='M',c=male?[3.06117,1.12370,-0.93263,a.tratada==='1'?1.99881:1.93303,0.65451,0.57367,23.9802,0.88936]:[2.32888,1.20904,-0.70833,a.tratada==='1'?2.82263:2.76157,0.52873,0.69154,26.1931,0.95012],linear=c[0]*Math.log(a.idade)+c[1]*Math.log(a.ct)+c[2]*Math.log(a.hdl)+c[3]*Math.log(a.pas)+c[4]*Number(a.fumante)+c[5]*Number(a.diabetes),risk=100*(1-c[7]**Math.exp(linear-c[6]));return out(risk,'%','Framingham 2008 · 10 anos',{risk,linear});},
 [cite('Framingham Heart Study · General CVD 10-year risk · coeficientes originais','https://www.framinghamheartstudy.org/fhs-for-researchers/fhs-risk-functions/cardiovascular-disease-10-year-risk/')]);

function calculate(id,input){
 const method=definitions[id];if(!method)return {error:'Método inexistente.',code:'TOOL_NOT_FOUND'};
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe os campos.',code:'INVALID_INPUT'};
 const values={};
 for(const [name,,kind,options={}] of method.fields){const value=input[name];
  if(kind==='chk'){if(typeof value!=='boolean')return {error:'Responda sim ou não.',code:'MISSING_BOOLEAN',field:name};values[name]=value;continue;}
  if(value==null||value===''){if(!options.opt)return {error:'Preencha o campo obrigatório.',code:'REQUIRED_FIELD',field:name};values[name]=null;continue;}
  if(kind==='num'){if(typeof value!=='number'||!Number.isFinite(value))return {error:'Número inválido.',code:'INVALID_INPUT',field:name};if(value<options.min||value>options.max)return {error:'Valor fora do intervalo.',code:'OUT_OF_RANGE',field:name};if(options.integer&&!Number.isInteger(value))return {error:'Informe um número inteiro.',code:'INTEGER_REQUIRED',field:name};}
  else if(typeof value!=='string'||!Object.hasOwn(options.opts||{},value))return {error:'Opção inválida.',code:'INVALID_OPTION',field:name};
  values[name]=value;
 }
 try{const result=method.calculate(values);if(Object.values(result.raw).some(v=>typeof v==='number'&&!Number.isFinite(v)))throw new DomainError('', 'Resultado fora do domínio.');return {id,...result,methodVersion:method.version,clinicalValidation:'not-performed'};}
 catch(error){return {error:error instanceof DomainError?error.message:'Confira o domínio do método.',code:'METHOD_SCOPE',...(error.field?{field:error.field}:{})};}
}
module.exports={definitions,calculate};