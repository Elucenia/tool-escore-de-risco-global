<!-- ELUCENIA technical documentation · escore-de-risco-global · ja · no clinical/professional/rights approval -->

# Framingham 2008 心血管リスク

[条件・出典・許諾](https://elucenia.org/ja/tools/escore-de-risco-global)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 性別

`sexo`

- `F` — 女性
- `M` — 男性

### 年齢

`idade`

年 · 範囲: 30–74

### 総コレステロール

`ct`

mg/dL · 範囲: 70–500

### HDLコレステロール

`hdl`

mg/dL · 範囲: 10–150

### 収縮期血圧

`pas`

mmHg · 範囲: 70–260

### 降圧薬を使用していますか？

`tratada`

- `0` — いいえ
- `1` — はい

### 喫煙していますか？

`fumante`

- `0` — いいえ
- `1` — はい

### 糖尿病がありますか？

`diabetes`

- `0` — いいえ
- `1` — はい

### 確立した心血管疾患がなく、歴史的Framingham 2008版の使用を確認しましたか？

`contexto`

- `0` — いいえ
- `1` — はい

## 方法の版

Framingham General CVD 2008；脂質を用いた連続モデル，歴史的手法

## 記載された計算式

10年リスク = 100 × \[1 − S₀^exp（ΣβX − 平均）\]。年齢、総コレステロール、HDL、治療中/未治療の収縮期血圧、喫煙、糖尿病を含む連続モデルの性別係数を使用します。

## 限界・対象集団

元の対象集団は心血管疾患のない30～74歳です。PREVENTやSBC 2025ガイドラインを示すものではありません。脂質目標や治療を適用しません。地域での較正は確認が必要です。

## 参考文献

- [Framingham Heart Study · General CVD 10-year risk · 元の係数](https://www.framinghamheartstudy.org/fhs-for-researchers/fhs-risk-functions/cardiovascular-disease-10-year-risk/)

- [D'Agostino RB et al. General cardiovascular risk profile for use in primary care: the Framingham Heart Study. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.699579)

- [Faludi AA et al. Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose – 2017. Arq Bras Cardiol.](https://doi.org/10.5935/abc.20170121)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
