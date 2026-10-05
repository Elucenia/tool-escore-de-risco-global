<!-- ELUCENIA technical documentation · escore-de-risco-global · fr · no clinical/professional/rights approval -->

# Risque cardiovasculaire de Framingham 2008

[conditions, sources et autorisations](https://elucenia.org/fr/outils/escore-de-risco-global)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Sexe

`sexo`

- `F` — Féminin
- `M` — Masculin

### Âge

`idade`

ans · intervalle: 30–74

### Cholestérol total

`ct`

mg/dL · intervalle: 70–500

### Cholestérol HDL

`hdl`

mg/dL · intervalle: 10–150

### Pression systolique

`pas`

mmHg · intervalle: 70–260

### Prend un traitement antihypertenseur ?

`tratada`

- `0` — Non
- `1` — Oui

### Fumeur ?

`fumante`

- `0` — Non
- `1` — Oui

### Diabète ?

`diabetes`

- `0` — Non
- `1` — Oui

### Absence de maladie cardiovasculaire établie ; utilisation de la version historique Framingham 2008 confirmée ?

`contexto`

- `0` — Non
- `1` — Oui

## Édition de la méthode

Framingham General CVD 2008 ; modèle continu avec lipides, historique

## Formule documentée

Risque à 10 ans = 100 × \[1 − S₀^exp(ΣβX − moyenne)\]. Coefficients selon le sexe du modèle continu avec âge, cholestérol total, HDL, PAS traitée/non traitée, tabagisme et diabète.

## Limites et population

Population originale de 30–74 ans sans maladie cardiovasculaire. Ne représente ni PREVENT ni la recommandation SBC 2025. N’applique pas d’objectifs lipidiques ou de traitements. La calibration locale doit être vérifiée.

## Références

- [Framingham Heart Study · General CVD 10-year risk · coefficients originaux](https://www.framinghamheartstudy.org/fhs-for-researchers/fhs-risk-functions/cardiovascular-disease-10-year-risk/)

- [D'Agostino RB et al. General cardiovascular risk profile for use in primary care: the Framingham Heart Study. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.699579)

- [Faludi AA et al. Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose – 2017. Arq Bras Cardiol.](https://doi.org/10.5935/abc.20170121)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
