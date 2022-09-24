# AutoComment

在匹配到正则的情况下自动添加指定评论，也可以从摘录中提取特定内容为评论。

## Custom

::: warning Input Format
[replace() Function Format —— Extract](../custom.md#replace-function)
:::

**例**

- `(/./, "这是一个例子")` 即可每次都添加一条评论为“这是一个例子”。

## [MagicAction for Card](magicaction4card.md#add-comment)

### Add Comment

::: warning Input Format
[replace() Function Format —— Extract](../custom.md#replace-function)
:::

由于大部分情况下只是为了添加评论，而无须提取，所以你可以直接输入评论内容，我会将其补全为 `(/./, "评论")`。
