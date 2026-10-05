<!-- ELUCENIA technical documentation · escore-de-risco-global · en · no clinical/professional/rights approval -->

# Framingham 2008 cardiovascular risk

[conditions, sources and permissions](https://elucenia.org/en/tools/escore-de-risco-global)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Sex

`sexo`

- `F` — Female
- `M` — Male

### Age

`idade`

years · range: 30–74

### Total cholesterol

`ct`

mg/dL · range: 70–500

### HDL cholesterol

`hdl`

mg/dL · range: 10–150

### Systolic blood pressure

`pas`

mmHg · range: 70–260

### Taking blood pressure medication?

`tratada`

- `0` — No
- `1` — Yes

### Smoker?

`fumante`

- `0` — No
- `1` — Yes

### Diabetes?

`diabetes`

- `0` — No
- `1` — Yes

### No established cardiovascular disease; use of the historical Framingham 2008 version confirmed?

`contexto`

- `0` — No
- `1` — Yes

## Method edition

Framingham General CVD 2008; continuous lipid-based model, historical

## Documented formula

Ten-year risk = 100 × \[1 − S₀^exp(ΣβX − mean)\]. Sex-specific coefficients from the continuous model with age, total cholesterol, HDL, treated/untreated SBP, smoking and diabetes.

## Limits and population

Original population: ages 30–74 without cardiovascular disease. Does not represent PREVENT or the SBC 2025 guideline. Does not apply lipid targets or treatments. Local calibration requires checking.

## References

- [Framingham Heart Study · General CVD 10-year risk · original coefficients](https://www.framinghamheartstudy.org/fhs-for-researchers/fhs-risk-functions/cardiovascular-disease-10-year-risk/)

- [D'Agostino RB et al. General cardiovascular risk profile for use in primary care: the Framingham Heart Study. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.699579)

- [Faludi AA et al. Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose – 2017. Arq Bras Cardiol.](https://doi.org/10.5935/abc.20170121)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
