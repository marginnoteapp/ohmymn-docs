# AutoTranslate

OhMyMN 的一大特点就是其中各个模块之间可以相互协作，在 AutoComplete 中就已经出现过 AutoTranslate 的身影了，用于对上下文进行翻译。虽然我已经写了需要设置 AutoTranslate，但貌似也没多少人在意。AutoTranslate 的主要职责是在摘录的时候自动翻译（翻译的结果单独作为评论）。

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic/ed1df2deb0a2aff5ad680bd12cb7fc847bbd6f72.gif?x-oss-process=base_webp)

## 获取 API 密钥

首先你需要知道这个服务是调用的第三方的翻译服务，所以需要你自行去获取这个服务的密钥，没办法直接使用。我提供了百度翻译和彩云小译可以选择，百度翻译以及彩云小译都有免费的额度，足够你使用。

### 百度翻译

[点击查看申请教程，感谢 Bob!](https://bobtranslate.com/service/translate/baidu.html)

百度翻译感觉翻译会准确一点，支持的语言会更多，还支持自定义术语库，可以自定义一些专业术语的对应关系，从而精确翻译。

### 彩云小译

[点击查看申请教程，感谢 Bob!](https://bobtranslate.com/service/translate/caiyun.html)

彩云小译只支持中英日三国语言的互译，对大部分国内学生来说就够用了，可以在百度翻译的免费额度用完后切换到彩云小译。

## 限制触发的条件

虽然我只提供了字数上的限制，低于某个字数就不会执行，这个和 [Another AutoTitle](anotherautotitle.md#预设) 中的字数限制一模一样，分了类中文和类英文，这里不多说。

底层我还加了一层限制，那就是如果摘录的语言本身不属于你选择的输入语言，就不会执行。当然，我也只能基于是否有字母，是否是半角来判断，可能不会太精确，比如英语和法语之间就没办法。

## [MagicAction for Text](magicaction4text.md#翻译选中文字)

### 翻译选中文字

可以实现所谓的划词翻译。

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic/5e42ca59095a4ba58c881aa7f86fc2f212d7e8d3.gif?x-oss-process=base_webp)

利用 Gesture 模块，添加触发手势，真正实现划词翻译，还不用担心误触。

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic/8d0fb21b9ae2fea0b3dd6864345034dedbb59bf8.gif?x-oss-process=base_webp)
