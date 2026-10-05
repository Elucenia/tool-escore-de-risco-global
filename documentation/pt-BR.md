<!-- ELUCENIA technical documentation · escore-de-risco-global · pt-BR · no clinical/professional/rights approval -->

# Risco cardiovascular de Framingham 2008

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/escore-de-risco-global)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Sexo

`sexo`

- `F` — Feminino
- `M` — Masculino

### Idade

`idade`

anos · intervalo: 30–74

### Colesterol total

`ct`

mg/dL · intervalo: 70–500

### HDL-colesterol

`hdl`

mg/dL · intervalo: 10–150

### Pressão sistólica

`pas`

mmHg · intervalo: 70–260

### Usa remédio para pressão?

`tratada`

- `0` — Não
- `1` — Sim

### Fumante?

`fumante`

- `0` — Não
- `1` — Sim

### Diabetes?

`diabetes`

- `0` — Não
- `1` — Sim

### Sem doença cardiovascular estabelecida; uso da versão histórica Framingham 2008 confirmado?

`contexto`

- `0` — Não
- `1` — Sim

## Edição do método

Framingham General CVD 2008; modelo contínuo com lipídios, histórico

## Fórmula documentada

Risco em 10 anos = 100 × \[1 − S₀^exp(ΣβX − média)\]. Coeficientes por sexo do modelo contínuo com idade, colesterol total, HDL, PAS tratada/não tratada, tabagismo e diabetes.

## Limites e população

População original de 30–74 anos sem doença cardiovascular. Não representa PREVENT nem diretriz SBC 2025. Não aplica metas lipídicas ou tratamentos. A calibração local exige conferência.

## Referências

- [Framingham Heart Study · General CVD 10-year risk · coeficientes originais](https://www.framinghamheartstudy.org/fhs-for-researchers/fhs-risk-functions/cardiovascular-disease-10-year-risk/)

- [D'Agostino RB et al. General cardiovascular risk profile for use in primary care: the Framingham Heart Study. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.699579)

- [Faludi AA et al. Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose – 2017. Arq Bras Cardiol.](https://doi.org/10.5935/abc.20170121)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
