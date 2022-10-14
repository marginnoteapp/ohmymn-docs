# Gesture

::: warning Note
Available for iPad only. This feature is provided entirely by OhMyMN and is not affiliated with MN.
:::

Use gestures to trigger actions in MagicAction.

@video[https://www.bilibili.com/video/BV1fb4y1E77b/](https://video.busiyi.world/bili.mp4?aid=636163121&bvid=BV1fb4y1E77b&cid=499697321)

::: tip
Try to slide in the middle area slowly and for a long distance.

:::

Trigger actions on MagicAction directly by sliding `up, down, left, right` on different toolbars in one step, without opening the control panel.

There are currently three areas with four directional gestures and two areas that are card-related and are used to trigger actions in [MagicAction for Card](magicaction4card.md).

## Card-related Toolbar

`Card Selection Toolbar`

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220731101445.png?x-oss-process=base_webp)

`Card Multi-Select Toolbar`

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220731101505.png?x-oss-process=base_webp)

This area is related to text selection and is used to trigger the action in [MagicAction for Text](magicaction4text.md). The same holds for selecting a region.

Highly recommended to set `Toggle Excerpt Title` to `Card Single Select Toolbar ↓`, in combination with [Another AutoTitle](anotherautotitle.md) to automatically toggle the title. 

## Text Selection Toolbar

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220731101552.png?x-oss-process=base_webp)

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220731101619.png?x-oss-process=base_webp)

These two have different menu styles, but both are part of the text selection toolbar. The first one will show options such as `Set Title` and `Add as Comment` because you have selected an excerpted note before this text is selected.

This has been specially handled by [MagicAction for Text](magicaction4text.md) and you can check it yourself. It is possible to add a formula directly to a card after OCR.

## Blocked Area

The gesture detection is added to the entire MN interface, and in theory， OhMyMN will pick up information when swiped anywhere. It's just that I've blocked it so that it only reponses in a few specified areas.

However, these toolbar positions are not judged as accurately as they could be, so it could lead to actions being performed by OhMyMN without swiping on the toolbar. To avoid such situations, I have further restricted the recognition area. In particular, the `Card Single Select Toolbar` is the most restricted.

As shown in the figure, if the `Card Single Select Toolbar` appears in the red box and you swipe inside the red box area, it will not respond.

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220731113055.png?x-oss-process=base_webp)

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220731113307.png?x-oss-process=base_webp)
