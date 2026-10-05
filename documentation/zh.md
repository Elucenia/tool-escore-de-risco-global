<!-- ELUCENIA technical documentation · escore-de-risco-global · zh · no clinical/professional/rights approval -->

# Framingham 2008 心血管风险

[条件、来源与许可](https://elucenia.org/zh/tools/escore-de-risco-global)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 性别

`sexo`

- `F` — 女性
- `M` — 男性

### 年龄

`idade`

年 · 范围: 30–74

### 总胆固醇

`ct`

mg/dL · 范围: 70–500

### HDL 胆固醇

`hdl`

mg/dL · 范围: 10–150

### 收缩压

`pas`

mmHg · 范围: 70–260

### 是否服用降压药？

`tratada`

- `0` — 否
- `1` — 是

### 是否吸烟？

`fumante`

- `0` — 否
- `1` — 是

### 是否有糖尿病？

`diabetes`

- `0` — 否
- `1` — 是

### 无已确诊心血管疾病；已确认使用历史版 Framingham 2008？

`contexto`

- `0` — 否
- `1` — 是

## 方法版本

Framingham General CVD 2008；历史性脂质连续模型

## 已记录的公式

10年风险 = 100 × \[1 − S₀^exp（ΣβX − 均值）\]。连续模型按性别使用系数，变量为年龄、总胆固醇、HDL、治疗/未治疗的收缩压、吸烟和糖尿病。

## 限制与适用人群

原始人群为30–74岁且无心血管疾病者。不代表PREVENT或SBC 2025指南，不应用血脂目标或治疗措施。本地校准需要核对。

## 参考文献

- [Framingham Heart Study · General CVD 10-year risk · 原始系数](https://www.framinghamheartstudy.org/fhs-for-researchers/fhs-risk-functions/cardiovascular-disease-10-year-risk/)

- [D'Agostino RB et al. General cardiovascular risk profile for use in primary care: the Framingham Heart Study. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.699579)

- [Faludi AA et al. Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose – 2017. Arq Bras Cardiol.](https://doi.org/10.5935/abc.20170121)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
