# replace() Function

为了使 OhMyMN 更加自由，更加强大，OhMyMN 中很多自定义都采用 [replace()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 函数作为驱动。这使得你几乎可以对摘录进行任何处理，不过为了避免更多的导致插件崩溃的不确定因素，<u>OhMyMN 限制了将函数作为参数，以及仅支持正则表达式</u>。

## 替换

[replace()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 函数的作用其实就是将匹配到的内容替换为给的文字，然后返回替换后的所有内容。 输入格式：

```js
regex, newSubStr
```

- `regex` 为 [Regular Expression](regex)，表示需要替换的内容。
- `newSubStr` 为普通字符串，需要使用双引号包裹，比如`"xxx"`，表示想要替换成的内容。

在 `newSubStr` 中，可以使用一些变量，来引用匹配到的内容：

1. `$&` 表示匹配的字符串，在重命名标题会很常用，`(/^.*$/g, "前面加段话 $&")`，这里的 `$&` 就代表原标题。
2. `` $` `` 表示匹配的字符串左边的内容。
3. `$'` 表示匹配的字符串右边的内容。
4. `$n` 如果你在 `regex` 中使用了[捕获组](regex#分组)，你就可以用 `$+数字` 来引用你捕获的内容。捕获组非常好用，比如经常会看到的 `A或B` 句式，如果你想修改为 `A; B` ，那么你就可以使用 `(/^(.*)或(.*)$/g, "$1; $2")`。
5. 在 v4 版本中，某些情况下还可以使用模版，点击查看 [Template Syntax](mustache.md)。

## 提取

在 OhMyMN v2 版本中，提取摘录中的部分内容作为标题，其实是有点麻烦的。为了可以对提取到的内容继续加工，我仍然使用的 [replace()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 函数，并将最后的结果作为标题。

举个例子，比如 `你好，**这是重点**`，想提取这个重点做为标题。你可能会写成 `(/\*\*(.+?)\*\*/, "$1")`（假设你已经很熟悉[Regular Expression](regex)），实际得到的标题却是 `你好，这是重点`。发现问题了吗，它只是 `**这是重点**` 替换为了 `这是重点`。

如果你只想要 `这是重点`，就必须使用 `(/^.*\*\*(.+?)\*\*.*$/, "$1")`。看出区别了吗，现在匹配的内容是整个字符串，然后把整个字符串替换为了 `newSubStr`。

在 v3 之后，OhMyMN 中所有的提取操作都是直接将 `newSubStr` 作为了返回值，可以直接写成 `(/\*\*(.+?)\*\*/, "$1")`。相当于只要正则匹配到了就返回 `newSubStr`，而使用捕获组，还可以将其捕获并返回。能实现这个效果，其实还需要用到 [match()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match) 函数。当然，这个你不需要了解。只需要按照前面替换的语法一样使用即可，只是最后会返回 `newSubStr` 而不是整个字符串。
