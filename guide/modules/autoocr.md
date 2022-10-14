# AutoOCR

AutoOCR's primary job is to perform online corrections for foreign languages, which are automatically performed when excerpting. Formula recognition can only be called manually using `MagicAction for Text` and cannot be executed automatically at the time of excerpting.

##  Get API key

Like AutoTranslate, AutoOCR also uses a third-party service and requires you to obtain the key yourself.

### Baidu OCR

[Click for the application tutorial. Thanks, Bob!](https://bobtranslate.com/service/ocr/baidu.html)

Pay attention to checking the free trials for different OCR services.

### MathPix
[Click for the application tutorial. Thanks, Tianruo!](http://ocr.tianruo.net/interface/Math_MathPix.html)

MathPix's formula recognition is very accurate. Pay attention to the information on the official website. No free trials are available and a credit card is required to apply. A one-time fee of $20 allows you to use it 1000 times a month.

## Foreign Language Online Correction

::: tip
Both `Auto Execution on Excerpt` and `Language Recognition` are valid for the current document so that they can be set separately for different documents.
:::

MN's OCR Pro does not support many foreign languages, making it impossible to excerpt properly, such as Russian. Auto OCR uses Baidu's OCR service to correct excerpts online.

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic/20220813094209.gif?x-oss-process=base_webp)

In combination with Autotranslate, auto-translation for foreign languages is also possible.

## [MagicAction for Text](magicaction4text.md#公式识别)


### Formula Recognition
::: warning

Formula recognition can only be called manually using `MagicAction for Text` and cannot be executed automatically at the time of excerpting. Do not select more than two lines of text, which tends to fail and will not be displayed completely on the card.

:::

You need to use Markdown plugins to display formulas, so you must install Markdown plugins in advance. Currently, there are 3 Markdown plugins and I recommend using [Milkdown](https://bbs.marginnote.cn/t/topic/34772).

This feature has three options
- `pure latex`: [MarkDown](https://bbs.marginnote.cn/t/topic/7280/124) Please select this option for the plugins, including when Milkdown's MarkDown compatibility is enabled. Please note that the Milkdown and MarkDown plugins have different syntaxes for formulas. Please think carefully before choosing whether they are compatible.
- `$$latex$$` `$latex$`: [myMarkdown](https://bbs.marginnote.cn/t/topic/13635) and [Milkdown](https://bbs.marginnote.cn/t/topic/34772) are both viable options. You can check the differences between the two yourself if interested.

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic/b408c73d8abd1f90bd9580eadd9dbeeb9c9d3701.gif?x-oss-process=base_webp)

Please be prepared that although it looks cool, it is complicated to implement:
1. Apply for Baidu OCR or MathPix API key.
2. Fill it in AutoOCR and select the corresponding formula recognition service provider. 
3. Install any Markdown plugin and select the corresponding Markdown plugin. 
4. MagicAction for Text - in the pop-up menu for more options, turn on `Set as Title`.
5. **first select an excerpt or card** (otherwise you can only copy the result to the clipboard), then drag to select, and click `Formula Recognition`. The recognized Latex of the formula is automatically written to the previously selected card. Use the Gesture module to invoke the execution for a better experience.

### Text Recognition
Re-OCR the excerpt using AutoOCR's configuration.
### Handwriting recognition
Use Baidu OCR service for handwriting recognition. Please note the free trial.
### QR code recognition
Use Baidu OCR service for QR code recognition. Please note the free trial.