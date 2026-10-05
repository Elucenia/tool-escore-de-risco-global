<!-- ELUCENIA technical documentation · escore-de-risco-global · de · no clinical/professional/rights approval -->

# Kardiovaskuläres Risiko nach Framingham 2008

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/escore-de-risco-global)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Geschlecht

`sexo`

- `F` — Weiblich
- `M` — Männlich

### Alter

`idade`

Jahre · Bereich: 30–74

### Gesamtcholesterin

`ct`

mg/dL · Bereich: 70–500

### HDL-Cholesterin

`hdl`

mg/dL · Bereich: 10–150

### Systolischer Blutdruck

`pas`

mmHg · Bereich: 70–260

### Einnahme von Blutdruckmedikamenten?

`tratada`

- `0` — Nein
- `1` — Ja

### Raucher?

`fumante`

- `0` — Nein
- `1` — Ja

### Diabetes?

`diabetes`

- `0` — Nein
- `1` — Ja

### Keine etablierte kardiovaskuläre Erkrankung; Verwendung der historischen Framingham-Version 2008 bestätigt?

`contexto`

- `0` — Nein
- `1` — Ja

## Fassung der Methode

Framingham General CVD 2008; kontinuierliches lipidbasiertes Modell, historisch

## Dokumentierte Formel

Zehnjahresrisiko = 100 × \[1 − S₀^exp(ΣβX − Mittelwert)\]. Geschlechtsspezifische Koeffizienten des kontinuierlichen Modells mit Alter, Gesamtcholesterin, HDL, behandeltem/unbehandeltem systolischem Blutdruck, Rauchen und Diabetes.

## Grenzen und Population

Ursprüngliche Population: 30–74 Jahre ohne Herz-Kreislauf-Erkrankung. Bildet weder PREVENT noch die SBC-Leitlinie 2025 ab. Wendet keine Lipidziele oder Behandlungen an. Lokale Kalibrierung erfordert Prüfung.

## Referenzen

- [Framingham Heart Study · General CVD 10-year risk · Originalkoeffizienten](https://www.framinghamheartstudy.org/fhs-for-researchers/fhs-risk-functions/cardiovascular-disease-10-year-risk/)

- [D'Agostino RB et al. General cardiovascular risk profile for use in primary care: the Framingham Heart Study. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.699579)

- [Faludi AA et al. Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose – 2017. Arq Bras Cardiol.](https://doi.org/10.5935/abc.20170121)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
