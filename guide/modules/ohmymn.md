# OhMyMN

这个板块中的选项主要是设置这个面板的一些属性，以及控制其他模块的。

## Select Global Profile


::: tip
Only Current Document
:::

[配置管理](../profile.md)已经说过了 OhMyMN 的配置结构，这里不过多赘述。

## Module Quick Switch

停用或启用其他模块的，停用后不再显示其选项菜单。属于该模块的 Action 也不会显示在 MagicAction 中。

## Panel Position

::: tip Update
v4.1.0 Added：更多位置，支持自动跟随文档宽度调整。
:::

- 文档内侧：默认，文档内侧显示，支持自动跟随文档宽度调整。
- 文档脑图中间：文档脑图中间显示，支持自动跟随文档宽度调整。
- 脑图内侧：脑图内侧显示，支持自动跟随文档宽度调整。
- 靠左
- 居中
- 靠右

## Panel Height


通常 12.9 寸的 iPad 可以选择 `高点`，11 寸一般还是用 `标准`，这样最下面的输入框不会被键盘挡住。

## Panel Control

- 双击图标打开面板：双击笑脸 😀 开启面板，这样可以避免误触。
- 双击面板关闭面板：双击控制面板的任何地方（非按钮）都可以关闭面板。
- 动作执行完关闭面板：MagicAction 中的动作执行完就会关闭自动面板。

## 如果标题存在

[Another AutoTitle](anotherautotitle.md), [Another AutoDef](anotherautodef.md), [AutoComplete](autocomplete.md) 都可以将摘录转为标题。在标题存在的前提下，使用 [拖拽选区合并](../tips.md#拖拽选择区) 进卡片中，如果满足自动转为标题的条件，将会有以下几种处理办法：

- 不转为标题
- 合并标题：使用 `; ` 合并标题，可用于标题链接。
- 覆盖标题

### 转为标题后，原摘录将

通过上述操作将摘录转为标题后，原来的摘录会面临三个选择：

- 立即删除
- 等会删除：在下次摘录或者退出笔记本或者退出 MN，或者 MN 进入后台时进行删除。这么处理的原因是为了能够有调整摘录选区的机会。
- 不删除

## ~~Keey Screen ON~~

::: tip Update
v4.1.0 Deleted：拆分为单独的插件，点击下载：[Keep Screen On](./anotherautodef.md)
:::

## Lock Excerpt Text

开启后，在滑动文档的时候如果你手滑修改了文档中的摘录选区，OhMyMN 会帮你还原摘录中的文字。在创建摘录的时候，只要摘录菜单不消失，就可以一直修改。一旦菜单消失再修改的话就会被锁定。这个功能还可以做到，先摘录很长一段话，然后将选区缩短到一个词。

## Auto Backup Profile

::: tip Update
v4.1.0 Improved：直接设置备份卡片的链接。
:::

::: warning Input
卡片链接，例如 `marginnote3app://note/F20F324D-61B3-4CA9-A64C-0C92645A1E33`
:::

自动将配置信息保存到 MN 的脑图卡片中。同样请确保该卡片有子卡片，因为配置信息是写到子卡片的。子卡片越多越好，因为这个配置信息会不断膨胀，避免超过一张卡片的最大字数。
