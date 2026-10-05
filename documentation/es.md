<!-- ELUCENIA technical documentation · escore-de-risco-global · es · no clinical/professional/rights approval -->

# Riesgo cardiovascular de Framingham 2008

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/escore-de-risco-global)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Sexo

`sexo`

- `F` — Femenino
- `M` — Masculino

### Edad

`idade`

años · intervalo: 30–74

### Colesterol total

`ct`

mg/dL · intervalo: 70–500

### Colesterol HDL

`hdl`

mg/dL · intervalo: 10–150

### Presión sistólica

`pas`

mmHg · intervalo: 70–260

### ¿Toma medicación para la presión arterial?

`tratada`

- `0` — No
- `1` — Sí

### ¿Fumador?

`fumante`

- `0` — No
- `1` — Sí

### ¿Diabetes?

`diabetes`

- `0` — No
- `1` — Sí

### ¿Sin enfermedad cardiovascular establecida; uso de la versión histórica Framingham 2008 confirmado?

`contexto`

- `0` — No
- `1` — Sí

## Edición del método

Framingham General CVD 2008; modelo continuo con lípidos, histórico

## Fórmula documentada

Riesgo a 10 años = 100 × \[1 − S₀^exp(ΣβX − media)\]. Coeficientes por sexo del modelo continuo con edad, colesterol total, HDL, PAS tratada/no tratada, tabaquismo y diabetes.

## Límites y población

Población original de 30–74 años sin enfermedad cardiovascular. No representa PREVENT ni la guía SBC 2025. No aplica objetivos lipídicos ni tratamientos. La calibración local requiere comprobación.

## Referencias

- [Framingham Heart Study · General CVD 10-year risk · coeficientes originales](https://www.framinghamheartstudy.org/fhs-for-researchers/fhs-risk-functions/cardiovascular-disease-10-year-risk/)

- [D'Agostino RB et al. General cardiovascular risk profile for use in primary care: the Framingham Heart Study. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.699579)

- [Faludi AA et al. Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose – 2017. Arq Bras Cardiol.](https://doi.org/10.5935/abc.20170121)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
