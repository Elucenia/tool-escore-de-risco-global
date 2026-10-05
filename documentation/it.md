<!-- ELUCENIA technical documentation · escore-de-risco-global · it · no clinical/professional/rights approval -->

# Rischio cardiovascolare di Framingham 2008

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/escore-de-risco-global)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Sesso

`sexo`

- `F` — Femminile
- `M` — Maschile

### Età

`idade`

anni · intervallo: 30–74

### Colesterolo totale

`ct`

mg/dL · intervallo: 70–500

### Colesterolo HDL

`hdl`

mg/dL · intervallo: 10–150

### Pressione sistolica

`pas`

mmHg · intervallo: 70–260

### Assume farmaci per la pressione arteriosa?

`tratada`

- `0` — No
- `1` — Sì

### Fumatore?

`fumante`

- `0` — No
- `1` — Sì

### Diabete?

`diabetes`

- `0` — No
- `1` — Sì

### Assenza di malattia cardiovascolare accertata; uso della versione storica Framingham 2008 confermato?

`contexto`

- `0` — No
- `1` — Sì

## Edizione del metodo

Framingham General CVD 2008; modello continuo con lipidi, storico

## Formula documentata

Rischio a 10 anni = 100 × \[1 − S₀^exp(ΣβX − media)\]. Coefficienti per sesso del modello continuo con età, colesterolo totale, HDL, PAS trattata/non trattata, fumo e diabete.

## Limiti e popolazione

Popolazione originale di 30–74 anni senza malattia cardiovascolare. Non rappresenta PREVENT né la linea guida SBC 2025. Non applica obiettivi lipidici o trattamenti. La calibrazione locale richiede verifica.

## Riferimenti

- [Framingham Heart Study · General CVD 10-year risk · coefficienti originali](https://www.framinghamheartstudy.org/fhs-for-researchers/fhs-risk-functions/cardiovascular-disease-10-year-risk/)

- [D'Agostino RB et al. General cardiovascular risk profile for use in primary care: the Framingham Heart Study. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.699579)

- [Faludi AA et al. Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose – 2017. Arq Bras Cardiol.](https://doi.org/10.5935/abc.20170121)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
