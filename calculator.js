/* tool-escore-de-risco-global · Elucenia · https://github.com/Elucenia/tool-escore-de-risco-global
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"escore-de-risco-global","title":"Escore de Risco Global","fields":[["sexo","Sexo","radio",{"opts":{"F":"Feminino","M":"Masculino"}}],["idade","Idade","num",{"min":30,"max":99,"unit":"anos","ph":"55"}],["ct","Colesterol total","num",{"min":70,"max":500,"unit":"mg/dL","ph":"200"}],["hdl","HDL-colesterol","num",{"min":10,"max":150,"unit":"mg/dL","ph":"45"}],["pas","Pressão sistólica","num",{"min":70,"max":260,"unit":"mmHg","ph":"130"}],["tratada","Usa remédio para pressão?","radio",{"opts":{"0":"Não","1":"Sim"}}],["fumante","Fumante?","radio",{"opts":{"0":"Não","1":"Sim"}}],["diabetes","Diabetes?","radio",{"opts":{"0":"Não","1":"Sim"}}]],"config":null,"reviewStatus":"restricted","clinicalValidation":"not-performed"});
function calculate(){return {error:'Cálculo suspenso: consulte a revisão e a fonte oficial.',code:'REVIEW_REQUIRED',id:TOOL.id};}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
