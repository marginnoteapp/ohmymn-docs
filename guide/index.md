# 简介

::: tip 模块
可以类比插件，是 OhMyMN 内部的插件。
:::

首先要明白 OhMyMN 本质上是一个控制面板。里面所有的功能都是单独的模块，每个模块都被赋予了三种能力：

1. 摘录时修改摘录的内容，或者获取摘录内容并进行其他操作。
2. 脑图中选中卡片后，对卡片进行修改或获取信息并进行其他操作。
3. 文档中选中文字后，获取文字或选区信息并进行其他操作。

有的模块可能三种能力都用了，有的可能只用了其中一个，也有的一个都没有，仅仅只是一些选项。

使用第一种能力的模块通常以 Auto 开头，比如 AutoTitle，AutoDef，表示可以在摘录时自动执行（默认不执行，需要开启 `摘录时自动执行`）。使用第一种能力的模块通常还会使用第二种能力，以便处理已经存在的卡片。

第二种能力和第三种能力也通常同时使用，比如用来复制，搜索，导出。它们有一个共同的名字 —— 动作（Action）。所有模块的动作都会出现在 [MagicAction for Card](./modules/magicaction4card.md) 和 [MagicAction for Text](./modules/magicaction4text.md) 中，也就是一个按钮，点击就会执行相应的动作。

除此之外，所有模块被分为了两大类：

1. 固定模块：无法关闭的模块。

   - [OhMyMN](/guide/modules/ohmymn)
   - [MagicAction for Card](/guide/modules/magicaction4card)
   - [MagicAction for Text](/guide/modules/magicaction4text)

2. 可选模块：可以选择开启的模块，可以在 `OhMyMN-模块快捷开关` 中启用

   - [Gesture](/guide/modules/gesture)
   - [CopySearch](/guide/modules/copysearch)
   - AutoX
     - [Another AutoTitle](/guide/modules/anotherautotitle)
     - [Another AutoDef](/guide/modules/anotherautodef)
     - [AutoFormat](/guide/modules/autoformat)
     - [AutoComplete](/guide/modules/autocomplete)
     - [AutoReplace](/guide/modules/autoreplace)
     - [AutoList](/guide/modules/autolist)
     - [AutoTag](/guide/modules/autotag)
     - [AutoStyle](/guide/modules/autostyle)
     - [AutoOCR](/guide/modules/autoocr)
     - [AutoTranslate](/guide/modules/autotranslate)
     - [AutoSimplify](/guide/modules/autosimplify.md)
   - ~~Export to X~~
     - ~~Export to Flomo~~
     - ~~Export to Anki~~
     - ~~Export to Devonthink~~
