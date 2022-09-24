# Gesture

::: warning 注意
仅 iPad 可用。该功能完全由 OhMyMN 提供，与 MN 无关。
:::

使用手势来触发 MagicAction 中的动作。

@video[https://www.bilibili.com/video/BV1fb4y1E77b/](https://video.busiyi.world/bili.mp4?aid=636163121&bvid=BV1fb4y1E77b&cid=499697321)

::: tip
尽量在中间区域滑动，滑动速度慢且距离长。
:::

通过在不同工具栏上 `上下左右` 滑动来直接触发 MagicAction 上的动作，而不用打开控制面板，一步到位。

目前有三个区域四个方向的手势，两个区域是卡片相关，用于触发 [MagicAction for Card](magicaction4card.md) 上的动作。

## 卡片相关工具栏

`卡片选择工具栏`

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220731101445.png?x-oss-process=base_webp)

`卡片多选工具栏`

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220731101505.png?x-oss-process=base_webp)

这个区域是文本选择相关，用于触发 [MagicAction for Text](magicaction4text.md) 上的动作。框选一个区域也是一样的。

强烈推荐将 `切换摘录标题` 设置为 `卡片单选工具栏 ↓`，搭配上 [Another AutoTitle](anotherautotitle.md) 自动转标题，用了就回不去了。

## 文本选择工具栏

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220731101552.png?x-oss-process=base_webp)

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220731101619.png?x-oss-process=base_webp)

这两个的菜单样式有所不同，但都属于文本选择工具栏。第一个会出现 `设置标题` `加为评论` 等选项，这是因为在选中这段文字之前，你已经选中了一段摘录的笔记。

[MagicAction for Text](magicaction4text.md) 已经对此进行特别处理，具体可以自行查看，可以实现了公式 OCR 后直接添加到卡片中。

## 屏蔽区域

其实这个手势检测是加在了整个 MN 界面上，理论上在任何地方滑动，OhMyMN 都会接收到信息。只是我做了屏蔽，使其只在指定几个区域上做出反应。

但是这几个工具栏位置的判断并没有那么准确，所以可能会导致没有在工具栏上滑动，OhMyMN 却执行了动作。为了减少这种情况发生，我进一步限制了识别的区域，尤其是 `卡片单选工具栏`，限制最大。

如图所示，如果 `卡片单选工具栏` 出现在红框内，并在红框区域内滑动，均不会响应。

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220731113055.png?x-oss-process=base_webp)

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220731113307.png?x-oss-process=base_webp)
