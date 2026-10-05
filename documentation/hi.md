<!-- ELUCENIA technical documentation · escore-de-risco-global · hi · no clinical/professional/rights approval -->

# Framingham 2008 हृदय और रक्तवाहिका जोखिम

[शर्तें, स्रोत और अनुमतियाँ](https://elucenia.org/hi/tools/escore-de-risco-global)

## उपयोग कैसे करें

पोर्टल पर उपकरण का उपयोग करें या स्थानीय HTTP सर्वर के माध्यम से index.html खोलें। भाषा चुनें, फ़ील्ड भरें और गणना करें।

## इनपुट और इकाइयाँ

### लिंग

`sexo`

- `F` — महिला
- `M` — पुरुष

### आयु

`idade`

वर्ष · सीमा: 30–74

### कुल कोलेस्ट्रॉल

`ct`

mg/dL · सीमा: 70–500

### HDL कोलेस्ट्रॉल

`hdl`

mg/dL · सीमा: 10–150

### सिस्टोलिक दबाव

`pas`

mmHg · सीमा: 70–260

### क्या रक्तचाप की दवा लेते हैं?

`tratada`

- `0` — नहीं
- `1` — हाँ

### क्या धूम्रपान करते हैं?

`fumante`

- `0` — नहीं
- `1` — हाँ

### क्या मधुमेह है?

`diabetes`

- `0` — नहीं
- `1` — हाँ

### स्थापित हृदयवाहिनी रोग नहीं; ऐतिहासिक Framingham 2008 संस्करण उपयोग पुष्टि?

`contexto`

- `0` — नहीं
- `1` — हाँ

## विधि का संस्करण

Framingham General CVD 2008; लिपिड-आधारित निरंतर मॉडल, ऐतिहासिक

## दस्तावेज़ित सूत्र

10-वर्षीय जोखिम = 100 × \[1 − S₀^exp(ΣβX − माध्य)\]। आयु, कुल कोलेस्ट्रॉल, HDL, उपचारित/अनुपचारित सिस्टोलिक दबाव, धूम्रपान और मधुमेह वाले सतत मॉडल के लिंग-विशिष्ट गुणांक।

## सीमाएँ और जनसमूह

मूल जनसंख्या 30–74 वर्ष, बिना हृदयवाहिका रोग। यह PREVENT या SBC 2025 दिशानिर्देश नहीं दर्शाता। लिपिड लक्ष्य या उपचार लागू नहीं करता। स्थानीय कैलिब्रेशन की जाँच आवश्यक है।

## संदर्भ

- [Framingham Heart Study · General CVD 10-year risk · मूल गुणांक](https://www.framinghamheartstudy.org/fhs-for-researchers/fhs-risk-functions/cardiovascular-disease-10-year-risk/)

- [D'Agostino RB et al. General cardiovascular risk profile for use in primary care: the Framingham Heart Study. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.699579)

- [Faludi AA et al. Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose – 2017. Arq Bras Cardiol.](https://doi.org/10.5935/abc.20170121)

## तकनीकी परीक्षण दोहराएँ

दर्ज कृत्रिम मामलों को दोहराने के लिए इस रिपॉज़िटरी की मूल निर्देशिका में node test.cjs चलाएँ। मूल इनपुट, अपेक्षित परिणाम और सहनशीलता सीमाएँ सुरक्षित रखी गई हैं। तकनीकी परीक्षण नैदानिक सत्यापन नहीं हैं।

```sh
node test.cjs
```

tool.json में स्रोत, संस्करण और समीक्षा का दायरा दिया गया है। examples.json में कृत्रिम इनपुट और अपेक्षित परिणाम सुरक्षित हैं; results.json में प्राप्त परिणाम दर्ज हैं।

[रिकॉर्ड और संदर्भ](../tool.json) · [JavaScript कोड](../calculator.js) · [संदर्भ मामले](../examples.json) · [results.json](../results.json)

## समीक्षा और उपयोग की शर्तें

स्वतंत्र नैदानिक समीक्षा नहीं की गई है।

यह इंटरफ़ेस लेखकों द्वारा किया गया अनुवाद है, कोई आधिकारिक या प्रमाणित संस्करण नहीं। स्वतंत्र नैदानिक समीक्षा, पेशेवर भाषाई समीक्षा और उपकरणों के अधिकारों की अनुमति की प्रक्रिया पूरी नहीं हुई है।

सूत्र या वर्गीकरण का परिणाम। व्याख्या, कार्यवाही और उपयुक्तता पेशेवर मूल्यांकन और चुने गए स्रोत पर निर्भर है।

## लाइसेंस और श्रेय

Apache-2.0 केवल ELUCENIA के कोड पर लागू होता है। उपकरणों, प्रकाशनों, अनुवादों और डेटा के अधिकार उनके संबंधित अधिकारधारकों के पास रहते हैं। LICENSE और NOTICE सुरक्षित रखें।

ELUCENIA · Felipe Guedes · Copyright © 2026
