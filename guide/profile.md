# Profile Mangement

## 配置结构

::: tip
笔记本配置和文档配置都会有注释说明，没有说明的情况下都是全局配置。

- [Only Current Notebook]
- [Only Current Document]

:::

- Global Profile x 4：可可以为不同笔记本选择不同的全局配置。多套全局配置用于多个不同的学习场景。比如 4 个科目，那么刚好就可以使用 4 套配置文件。如果你觉得 4 套不够，那么我认为你应该尽可能的让他们兼容，找出不同学习场景的最大公约数，兼顾灵活和方便。
  - 全局配置中又包含了所有模块的配置。
- Doc Profile：每个文档不一样。
- Notebook Profile：每个笔记本不一样。

## 初始化

如果你觉得初始配置不符合你的需求，不同笔记本，文档一一修改太过繁琐，放心，我肯定是想到了。你可能已经发现了 `OhMyMN-Select Global Profile` 中最后一项叫做 `Initialize`，当你在这个配置文件中修改时，它会同步到所有文档，笔记本。不过要注意，`OhMyMN-Select Global Profile`、`OhMyMN-Module Quick Switch` 这两个选项不会参与同步。对于文档配置和笔记本配置，初始化只会作用于已经打开过的文档或笔记本。

## 导出、导入

你还可以将所有的配置导出到脑图卡片中，这样就可以随着 MN 一起使用 iCloud 同步，也可以通过导出笔记本来分享配置文件。更多内容可以继续阅读 [MagicAction for Card-Manage Profile](modules/magicaction4card#manage-profile)。

## 重置、同步多窗口的配置

OhMyMN 在多窗口的情况下修改配置不会立刻同步过去，你可以通过 [MagicAction for Card-Manage Profile-Sync Profile With Other Windows](modules/magicaction4card#manage-profile) 来强制同步。

使用 [MagicAction for Card-Manage Profile-Reset Profile ](modules/magicaction4card#manage-profile) 来重置配置。在停用或者卸载插件时也会提供选项来重置配置。

## 将自定义设置写入卡片中

基于 MN 的脑图，OhMyMN 还可以将自定义的设置写入脑图卡片中，轻松实现排列组合，更多内容可以继续阅读 [Custom Input Format](custom.md#mnlink)。
