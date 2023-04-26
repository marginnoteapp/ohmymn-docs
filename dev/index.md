# 开始

::: warning 提醒
如果没有 Mac 就不建议继续阅读了，当然也不是不行，只是开发会非常痛苦，不建议浪费时间。
:::

首先要明白 MN 的插件底层 API 是基于 Objective-C 的，虽然你看上去插件是用 JS 写，但其实只是通过 JSBridge 调用 Objective-C 的 API 来实现的。

所以你要想开发插件，首先要了解 Objective-C，尤其是 Foundation 和 UIKit 这两个库。MN 的插件其实开放了很多 API，只是比较底层。而且还有一个问题，就是 MN 使用的 JSBridge 框架比较老旧，很多新 API 不支持，Bug 也比较多，iOS 和 macOS 也会有不少兼容性的问题，所以要做好踩坑的准备。

也正是因为插件只是用了 JSBridge，你没法使用 NodeJS 的 API，也没法使用部分 Browser 的 API，比如 `fetch`。而 Browser 的 API 也是 Safari 实现，所以 Safari 不支持的 JS 特性插件也不支持。

目前来说，MN 插件开发门槛还是比较高的，坑比较多，不过 OhMyMN 的出现，让开发门槛降低了很多。比如 OhMyMN 使用 TypeScript 开发，TypeScript 给 JS 带来了类型系统，在编译期就可以发现大部分的问题。OhMyMN 使用 ESBuild 打包，方便拆分模块，一个命令就可以快速打包一个插件，并且在开发期间还可以热更新。更为重要的是 OhMyMN 封装了大部分的 API，让开发者不再需要接触到底层的 Objective-C API。

插件开发的教程分为三个部分：
1. [MN 插件（Lite）开发](./lite.md)
2. [OhMyMN 模块开发](./module/)
3. [MN 插件（OhMyMN）开发](./ohmymn.md)

[MN 插件（Lite）开发](./lite.md) 只适用于简单功能，所以我称之为 Lite 版，也就是在 OhMyMN 出现之前传统的用一个 `main.js` 就能搞定的功能，比如 `AutoTitle`，`SearchInEudic`。如果你的功能比较复杂，又和摘录，卡片有关，建议阅读 [OhMyMN 模块开发](./module/)。如果无关，建议阅读 [MN 插件（OhMyMN）开发](./ohmymn.md)。

OhMyMN 模块就是 OhMyMN 内置的插件，独立于 MN 插件。[OhMyMN 模块开发](./module/) 非常简单，可以快速开发复杂的功能。

OhMyMN 不只是一个插件，而是一个开发框架，只是由于 MN 插件底层种种问题导致很难像前端框架一样拆分功能，按需选择。目前 OhMyMN 作为框架来说还不够完善，但是已经可以用于开发复杂的功能了。