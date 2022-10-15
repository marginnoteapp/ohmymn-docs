# AutoTranslate

One of the features of OhMyMN is the interaction between the various modules. AutoTranslate is already present in AutoComplete and is used for contextual translation. Although I have written about the need to set up AutoTranslate, it seems that not many people care about it. The primary role of AutoTranslate is to auto translate  during excerpting (the result of the translation is saved as a separate comment).

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic/ed1df2deb0a2aff5ad680bd12cb7fc847bbd6f72.gif?x-oss-process=base_webp)

## Get API key

First of all, you need to know that this service invokes a third-party translation service, so you need to get the key of this service by yourself and you cannot use it directly. I provide Baidu Translate and LingoCloud to choose from, Baidu Translate as well as LingoCloud have free trials, which are enough for you to use.

### Baidu Translate

[Click for the application tutorial. Thanks, Bob!](https://bobtranslate.com/service/translate/baidu.html)

Baidu translation seems to translate more accurately. It supports more languages and custom terminology database. You can customize the correspondences of professional terminologies, so as to translate accurately.

### LingoCloud

[Click for the application tutorial. Thanks, Bob!!](https://bobtranslate.com/service/translate/caiyun.html)

LingoCloud only supports the translation among Chinese, English and Japanese. You can switch to LingoCloud after the free trials of Baidu translate is used up.

## Restrictions on Triggering

I have only provided a word limit. Below a certain number of words it will not be executed. This is exactly the same as the word limit in  [Another AutoTitle](anotherautotitle.md#预设) which is further divided into Chinese-character-like or English-word-liken word count.

At the bottom I have added a layer of restriction, that is, if the excerpted language itself is not part of the input language you have chosen, it will not be executed. Of course, I can only determine this based on the presence of letters and whether they are half-width characters, which may not be too accurate, for example, to distinguish between English and French.

## [MagicAction for Text](magicaction4text.md#翻译选中文字)

### Translate selected text

This makes the so-called "word-underscoring translation" possible.

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic/5e42ca59095a4ba58c881aa7f86fc2f212d7e8d3.gif?x-oss-process=base_webp)

Use the Gesture module to add trigger gestures for word translation without worrying about accidental touches.

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic/8d0fb21b9ae2fea0b3dd6864345034dedbb59bf8.gif?x-oss-process=base_webp)
