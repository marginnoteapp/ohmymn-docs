# 插件对象

如何创建一个插件？

```js
JSB.newAddon = () => {
  return JSB.defineClass(
    "Template: JSExtension",
    {
      sceneWillConnect() {
        self.status = false
        self.app = Application.sharedInstance()
        self.studyController = self.app.studyController(self.window)
      },
      queryAddonCommandStatus() {
        return {
            image: "logo_44x44.png",
            object: self,
            selector: "onToggle:",
            checked: self.status
          }
      },
      async onToggle() {
        self.status = true
        self.studyController.refreshAddonCommands()
        // 点击插件按钮执行的操作
        self.status = false
        self.studyController.refreshAddonCommands()
      }
    },
    {}
  )
}
```

从上面的示例可以看出，我们只需要给 `JSB.newAddon` 赋值一个函数，这个函数返回一个 `JSB.defineClass` 的 Objective-C 对象，这个对象就是我们的插件。

而这样的一个 `JSB.defineClass` 对象，需要传入 3 个参数：
1. 对象的名称以及继承的父类，上面的 `Template: JSExtension` 就表示这是一个继承自 `JSExtension` 的对象，这个对象的名称是 `Template`。
2. 对象的实例方法。
3. 对象的静态方法。