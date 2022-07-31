# AutoComplete
**Powered by [ECDICT](https://github.com/skywind3000/ECDICT) & [API](http://dict.e.opac.vip/dict.php)**
::: warning
本模块会用到一个在线 API 来获取数据，需要联网，并且由于服务器在国内，国外用户有可能无法正常使用。

v4 版本提供了本地数据库版本，体积较大，但不需要联网，可以自行选择下载和开启。数据库较大，首次安装 OhMyMN 时会解压数据库，请耐心等待。
:::

该模块用于解决使用 MN 学习英语，摘录英文单词的一个困扰，那就是在实际文章中，英文单词往往都不是原型，无法很好的利用标题链接。开启该功能后，会自动补全第三人称，复数，过去，完成，比较级等等形式。

更为强大的是，不管你摘录的是不是原型，都可以自动判断，然后补全所有形式。

## 柯林斯星级筛选
越常用的单词柯林斯星级就越高，一共 6 个等级，0-5 星。通常 5 星的单词都是比较简单的单词，可以排除。

## 填充单词信息

可以将单词的部分信息添加为评论，达到自动制卡的目的。

### 自定义
自定义输入格式：[模版](../advance/custom.md#模版)

有以下几个变量
::: v-pre
| 变量名 | 备注 |
| --- | --- |
| `word` | 单词原型 |
| `phonetic` | 音标，大部分为英式音标 |
| `zh` | 中文释义 |
| `en` | 英文释义 |
| `tags` | 高考、四六级等等标签 |
| `collins` | 柯林斯星级 |

有两个输入栏，可以生成两个评论，通常第一栏填入音标，标签等信息，第二栏填入中文或者英文释义。这样方便在复习模式中将释义单独放在卡片背面。

默认填充1: `{{#phonetic}}🔈[{{phonetic}}] {{/phonetic}} {{collins}}{{#tags}}\n🏷 {{tags}}{{/tags}}`

默认填充2: `✍🏻\n{{zh}}\n👀`
:::

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220730234119.png?x-oss-process=base_webp)

对于这个默认填充模版，还有一个配套的 anki 模版（[点击下载](autocomplete.md)），用于导出到 Anki。

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220731000252.png?x-oss-process=base_webp)

## 动态选择释义
开启此选项后，摘录的时候会弹出弹窗来选择当前文中的含义（最多 9 个），如果没有，则可以在输入框中输入来自定义。

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220731000657.png?x-oss-process=base_webp)

### 多选释义
通过在输入框中输入指定的变量，来多选释义。
- `[all]`: 所有释义。
- `[1-9]`: 编号 1-9 的释义。
- `[123789]`：编号 1，2，3，7，8，9 的释义，依次类推。
- `[adj]`: 词性为 adj 的释义，依次类推。

多选释义和自定义释义可以同时使用，比如 `[all] v.新的释义`。

## 动态选择单词原形
有些单词比如 lay，既是 lie 的过去式，也是 laid 的原形。这时候就需要主动选择一下。

## 自动摘录上下文
顾名思义，可以自动摘录当前单词所在的句子，从而保留语境，方便复习记忆。

目前不支持 OCR Pro，如果 PDF 本身没有文字层，则无法正常工作。如果非常依赖这个功能，可以使用 Abbyy 来 OCR 整本书。

### 翻译上下文
使用 [AutoTranslate](autotranslate.md) 来对上下文进行翻译。

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220730234119.png?x-oss-process=base_webp)

## [MagicAction for Card](magicaction4card.md#英文单词制卡)
### 英文单词制卡
使用相同的配置。AutoComplete 生成的信息都属于评论，评论无法被修改，只能删除重新添加。
- 追加：添加新的评论。
- 替换: 先删除旧评论，再添加新的评论（图片可能会跑顶上去）。