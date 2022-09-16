---
outline: deep
---

# MagicAction for Card

一些与卡片相关的动作，其实就是按钮，先选中卡片（可以多选），再点击按钮来手动执行。其他模块的也会有一些动作，都会集中显示在这里，这些动作和模块相绑定，使用相同的配置，模块启用后才会在此显示相应动作。

## 智能选择

当你选中一个有子节点的卡片或者选中多个同层级并且均有子节点的卡片，此时 OhMyMN 会弹出菜单，询问是否选中子节点或者后代节点，这可以用于快速批量选中。

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220521005544.png?x-oss-process=base_webp)

父子节点的 [相关概念](../concept.md#2-卡片节点父子卡片父子节点祖先卡片祖先节点后代卡片后代节点)

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220521005122.png?x-oss-process=base_webp)

## 动作

### 配置管理

可以将 OhMyMN 的配置信息写入卡片中，也可以从卡片中读取配置。

写入时请确保选中的卡片至少有 1 张子卡片，理论上子卡片越多越好，这样避免日积月累导致超过单张卡片的最大字数。写入卡片后，还可以打开 [OhMyMN->自动备份配置](ohmymn.md#自动备份配置)，会在后台自动写入卡片中。

读取配置会覆盖掉当前的配置信息，可以单独读取全局配置，笔记本配置，或者文档配置。

### 筛选卡片

输入格式：[正则表达式](../custom.md#正则表达式)

可以单独筛选标题，摘录，评论，标签。筛选后还可以继续使用其他动作。

虽然 OhMyMN 的选中和 MN 的选中不一样，无法使用删除，剪切的功能。不过办法总是有的，你可以把选中的卡片设置为一个特殊的颜色，再通过颜色筛选，即可快速重新选中。

### 合并卡片

MN 自带的合并功能实在鸡肋，不但无法合并标题，还会把标题作为评论合并进卡片。该功能解决了三个问题：

1. 合并标题。
2. 其它卡片标题不作为评论。
3. 合并标签。

### 重命名标题

OhMyMN 中最强大的功能前三吧，用于批量对卡片重命名，编号，分层编号。

输入格式：[replace 函数格式](../custom.md#replace-函数)

::: tip
由于大多数情况下是匹配整个标题，所以默认的正则就是 `/^.*$/`，你只需要输入新的标题即可，还可以用 `$&` 来引用当前标题。
:::

#### 如何输入编号?

<p/>

@video[https://www.bilibili.com/video/BV1sP4y1A7mE](https://video.busiyi.world/bili.mp4?aid=893683501&bvid=BV1sP4y1A7mE&cid=499980330)

这里用到了一个魔法变量，`%["1"]`，每次调用时都会递增,请自行查看[语法](../serial.md#1-和-1)。

#### 如何分层编号？

:::warning
分层编号是对其所有后代节点进行编号，自身不会编号。使用时请确保该卡片至少有子节点。
:::

@video[https://www.bilibili.com/video/BV1WY411t7vC](https://video.busiyi.world/bili.mp4?aid=253632393&bvid=BV1WY411t7vC&cid=499975972)

视频中只使用 `#["1"] $&` 就达到了这个效果。`#["1"]` 也是一个魔法变量，请自行查看[语法](../serial.md#1)。

### 合并卡片内文字

只会合并文字摘录和文字评论，框选的图片摘录会自动 OCR。图片评论以及 HTML 评论（Markdown）会自动置顶。
你可以在这里设置前后修饰，比如开头加上编号，结尾加上换行。

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220730161836.png?x-oss-process=base_webp)

默认为 `%["1"]. $&\n\n`

- `%["1"]` 前面提过，会自动递增的魔法变量，详细用法请查看[语法](../serial.md#1-和-1)。
- `$&` 表示当前的评论或者摘录。
- `\n` 表示换行，这个到处都会用到，在 OhMyMN 里想要换行，就使用 `\n`。

**选项：**

- 合并为摘录：摘录可以使用 MagicAction 中的其他功能进行进一步操作，同时会保留重点。
- 合并为评论。

### 提取标题

来自于 [Another AutoDef](anotherautodef.md#提取标题)

### 优化摘录排版

来自于 [AutoFormat](autoformat.md#优化摘录排版)

### 英文单词制卡

来自于 [AutoComplete](autocomplete.md#英文单词制卡)

### 替换摘录文字

来自于 [AutoReplace](autoreplace.md#替换摘录文字)

### 修改摘录颜色

来自于 [AutoStyle](autostyle.md#修改摘录颜色)

### 修改摘录样式

来自于 [AutoStyle](autostyle.md#修改摘录样式)

### 搜索卡片内容

来自于 [CopySearch](copysearch.md)

### 复制卡片内容

来自于 [CopySearch](copysearch.md)
