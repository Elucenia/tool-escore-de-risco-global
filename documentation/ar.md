<!-- ELUCENIA technical documentation · escore-de-risco-global · ar · no clinical/professional/rights approval -->

# الخطر القلبي الوعائي وفق Framingham 2008

[الشروط والمصادر والأذونات](https://elucenia.org/ar/tools/escore-de-risco-global)

## كيفية الاستخدام

استخدم الأداة في البوابة أو افتح index.html عبر خادم HTTP محلي. اختر اللغة، وأكمل الحقول، ثم أجرِ الحساب.

## المدخلات والوحدات

### الجنس

`sexo`

- `F` — أنثى
- `M` — ذكر

### العمر

`idade`

سنوات · النطاق: ٣٠–٧٤

### الكوليسترول الكلي

`ct`

mg/dL · النطاق: ٧٠–٥٠٠

### كوليسترول HDL

`hdl`

mg/dL · النطاق: ١٠–١٥٠

### الضغط الانقباضي

`pas`

mmHg · النطاق: ٧٠–٢٦٠

### هل يستخدم دواء لارتفاع ضغط الدم؟

`tratada`

- `0` — لا
- `1` — نعم

### هل يدخن؟

`fumante`

- `0` — لا
- `1` — نعم

### هل يوجد داء السكري؟

`diabetes`

- `0` — لا
- `1` — نعم

### دون مرض قلبي وعائي مثبت؛ هل تأكد استخدام نسخة Framingham ٢٠٠٨ التاريخية؟

`contexto`

- `0` — لا
- `1` — نعم

## إصدار الطريقة

Framingham General CVD 2008؛ نموذج مستمر يعتمد على الدهون، تاريخي

## المعادلة الموثقة

الخطر خلال 10 سنوات = 100 × \[1 − S₀^exp(ΣβX − المتوسط)\]. معاملات حسب الجنس للنموذج المستمر مع العمر والكوليسترول الكلّي وHDL والضغط الانقباضي المعالَج/غير المعالَج والتدخين والسكري.

## الحدود والفئة السكانية

الفئة الأصلية بعمر 30–74 سنة دون مرض قلبي وعائي. لا يمثّل PREVENT أو إرشادات SBC 2025. لا يطبّق أهداف الدهون أو العلاجات. تتطلّب المعايرة المحلية التحقّق.

## المراجع

- [Framingham Heart Study · General CVD 10-year risk · المعاملات الأصلية](https://www.framinghamheartstudy.org/fhs-for-researchers/fhs-risk-functions/cardiovascular-disease-10-year-risk/)

- [D'Agostino RB et al. General cardiovascular risk profile for use in primary care: the Framingham Heart Study. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.699579)

- [Faludi AA et al. Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose – 2017. Arq Bras Cardiol.](https://doi.org/10.5935/abc.20170121)

## إعادة إجراء الاختبارات التقنية

شغّل node test.cjs في المجلد الجذري لهذا المستودع لتكرار الحالات الاصطناعية المسجلة. تُحفظ المدخلات والنتائج المتوقعة وحدود التفاوت الأصلية. لا تُعدّ الاختبارات التقنية تحققًا سريريًا.

```sh
node test.cjs
```

يحتوي tool.json على المصادر والإصدار ونطاق المراجعة. يحتفظ examples.json بالمدخلات والنتائج المتوقعة للحالات الاصطناعية؛ ويسجل results.json النتائج التي تم الحصول عليها.

[السجل والمراجع](../tool.json) · [شيفرة JavaScript](../calculator.js) · [حالات مرجعية](../examples.json) · [results.json](../results.json)

## المراجعة وشروط الاستخدام

لم تُجرَ مراجعة سريرية مستقلة.

هذه الواجهة ترجمة أعدّها مؤلفوها، وليست إصدارًا رسميًا أو معتمدًا. لم تُجرَ مراجعة سريرية مستقلة أو مراجعة لغوية مهنية، ولم تُستكمل الموافقة على حقوق استخدام الأدوات.

نتيجة المعادلة أو التصنيف. يعتمد التفسير والتصرف ومدى الانطباق على التقييم المهني والمصدر المحدد.

## الترخيص ونسبة العمل إلى أصحابه

ينطبق Apache-2.0 على كود ELUCENIA فقط. تبقى حقوق الأدوات والمنشورات والترجمات والبيانات لأصحابها المعنيين. احتفظ بملفّي LICENSE وNOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
