# AutoComment

Automatically add specified comments if a regex is matched, or extract specific content from an excerpt as a comment.

## Custom

::: warning Input Format
[replace() Function Format —— Extract](../custom.md#replace-function)
:::

**Example**

- `(/./, "This is an example")` will add one comment as "This is an example" for each iteration.

## [MagicAction for Card](magicaction4card.md#add-comment)

### Add Comment

::: warning Input Format
[replace() Function Format —— Extract](../custom.md#replace-function)
:::

Since in most cases it's just to add a comment without extracting it, so you can just type in the comment content and I will complete it as `(/./, "<comment>")`.