# Another AutoDef
该功能与 [Another AutoTitle](./anotherautotitle.md) 的区别在于，Another AutoTitle 主要用于将摘录转换为标题，而 Another AutoDef 更多是将摘录的部分内容作为标题，剩余部分作为摘录，起到的是分割的作用。

至于为什么叫做 AutoDef，因为这个功能最常用到的就是定义。

::: tip 维基百科：定义
例如 “一个单身汉是一个未婚男子” 这个定义中 “单身汉” 是**被定义项**，“未婚男子” 是**定义项**。“是” 又被称为**定义联项**。所以 **定义 = 被定义项 + 定义联项 + 定义项**。
:::

这个定义联项既可以作为分割点，将其分为标题和摘录两部分，也可以通过这个定义联项来判断摘录的内容是否是一个定义，从而自动进行处理。

## 预设
我已经设置了几个常见的定义联项，为了避免影响正常的摘录行为，所以会比较克制。`xxx` 为定义项，`yyy` 为被定义项。

- xxx : yyy `/[：:]/`
- xxx —— yyy `/[一\-—]{1,2}/`
- xxx ，是(指) yyy `/[,，]\s*(?:通常|一般)*是指?/`
- xxx 是(指)， yyy `/(?:通常|一般)*是指?\s*[,，]/`
- xxx 是指 yyy `/(?:通常|一般)*是指/`
- yyy，___称(之)为 xxx `/[,，].*称之?为/y`
- yyy(被)称(之)为 xxx `/(?:通常|一般)?被?称之?为/y`

默认开启 `摘录仅保留定义项`，也就是将被定义项作为标题，定义项作为摘录。如果关闭，则只会把被定义项作为标题，摘录内容不变，相当于提取出了标题。
## 自定义定义联项
::: warning
这里用不着正则表达式数组，如果使用了正则表达式数组，仍然和多个正则表达式的效果相同。
:::
格式：[正则表达式](../advance/custom.md#正则表达式)

上面的预设我已经写清楚了背后的正则表达式，你可以自定义你需要的定义联项。这里的工作原理是 [split 函数](../advance/split.md)，把定义联项作为分隔点，自然而然就分成了被定义项和定义项。

你可能已经发现了，前面预设中后两个的正则用了一个标志 `y`，并且它们都属于被定义项在后面的情况。`y` 在正则中用的很少，所以我将其作为了一个参数，你只要用了 `y`，AutoDef 就会自动交换定义项和被定义项。

## 自定义别名分词
被定义项中通常会有别名，如果你打开 `别名转为多个标题` 选项，AutoDef 会自动将其拆分为多个标题，供标题链接使用。

自带的分词策略:
- 默认：`/或者?|[简又]?称(?:之?为)?/`
- 标点符号：`/[、。,，‘’“”"『』()（）【】「」《》«»\/\[\]]/`

::: warning
这里也用不着正则表达式数组，如果使用了正则表达式数组，仍然和多个正则表达式的效果相同。
:::

自定义格式：[正则表达式](../advance/custom.md#正则表达式)

## 自定义提取标题

格式: [replace 函数格式](../advance/custom.md#replace-函数)

直接从摘录中提取出标题，使用了 [replace 函数](../advance/replace.md#提取) 中的提取功能。

这里会用到这个格式的第三个参数 `fnKey`
- 默认为 0，可以省略，意味着保留摘录内容。但是如果你输入 1，则不会保留摘录内容。

## [MagicAction for Card](../modules/magicaction4card.md#提取标题)
### 提取标题
和 `自定义提取标题` 一样。
- `使用 AutoDef 的配置`：直接使用 `自定义提取标题` 中输入的自定义表达式。