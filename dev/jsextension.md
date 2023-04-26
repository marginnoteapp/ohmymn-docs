# 插件实例

## 插件对象
如何创建一个插件？下面是通过 [mnadon-lite](./lite.md) 工具创建的插件模版的一部分。

```js
JSB.newAddon = () => {
  const showHUD = (text, duration = 2) => {
    self.app.showHUD(text, self.window, duration)
  }
  const go = async () => {
    const { option } = await popup(
      "Template Popup",
      "Whether to view the Chinese development documents (old version, new version is not updated)?"
    )
    if (option === -1) return
    self.app.openURL(
      NSURL.URLWithString(encodeURI("http://docs.test.marginnote.cn/"))
    )
  }
  // 返回一个 JSExtension 对象，也就是插件
  return JSB.defineClass(
    Addon.name + ": JSExtension",
    // 实例方法
    {
      // 新的 MN 窗口打开
      sceneWillConnect() {
        self.status = false
        self.app = Application.sharedInstance()
        self.studyController = self.app.studyController(self.window)
      },

      // 设置插件按钮图标以及选中状态。点击插件按钮会触发 "onToggle" 方法。
      // 只在脑图模式下才显示图标。
      queryAddonCommandStatus() {
        return self.studyController.studyMode !== 3
          ? {
              image: "logo_44x44.png",
              object: self,
              selector: "onToggle:",
              checked: self.status
            }
          : null
      },

      // 点击插件图标执行的方法。效果就是按钮被选中，然后弹窗，然后取消选中。
      async onToggle() {
        self.status = true
        // 刷新插件按钮状态
        self.studyController.refreshAddonCommands()
        await go()
        self.status = false
        self.studyController.refreshAddonCommands()
      }
    },
    // 静态方法
    {}
  )
```

从上面的示例可以看出，我们只需要给 `JSB.newAddon` 赋值一个函数，这个函数返回一个 `JSB.defineClass` 的 Objective-C 对象，这个对象就是我们的插件。

而这样的一个 `JSB.defineClass` 方法，需要传入 3 个参数：
1. 对象的名称以及继承的父类，上面的 `Template: JSExtension` 就表示这是一个继承自 `JSExtension` 的对象，这个对象的名称是 `Template`。
2. 对象的实例方法，主要包括：
    - 插件的[生命周期](./lifecycle.md)
    - 插件接收到的[事件](./events.md)
3. 对象的静态方法。

## self
self 指代的就是这个插件实例，注意，这是 Objective-C 里的对象。并且这个 self 只能在对象的实例方法中使用。

MN 支持多窗口，不同窗口的插件实例是不同的，所以 self 也是不同的。
::: warning 注意
插件里的 JS 变量是多窗口共用的。要想区分开只能挂载到 self 上。
:::