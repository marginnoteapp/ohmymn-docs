import modules from "../modules"
import { DefaultTheme } from "vitepress"
const sidebar: DefaultTheme.SideBarConfig | DefaultTheme.MultiSideBarConfig = {
  "/dev/": "auto",
  "/api/": "auto",
  "/": [
    {
      text: "基础",
      children: [
        {
          text: "简介",
          link: "/guide/"
        },
        {
          text: "模块",
          link: "/guide/fundation/module"
        },
        {
          text: "基本概念",
          link: "/guide/fundation/concept"
        },
        {
          text: "配置管理",
          link: "/guide/fundation/profile"
        },
        {
          text: "注意事项",
          link: "/guide/fundation/attention"
        },
        {
          text: "MN 使用技巧",
          link: "/guide/fundation/tips"
        }
      ]
    },
    {
      text: "进阶",
      children: [
        {
          text: "正则表达式",
          link: "/guide/advance/regex"
        },
        {
          text: "replace() 函数",
          link: "/guide/advance/replace"
        },
        {
          text: "split() 函数",
          link: "/guide/advance/split"
        },
        {
          text: "模版语法",
          link: "/guide/advance/mustache"
        },
        {
          text: "模版变量",
          link: "/guide/advance/vars"
        },
        {
          text: "自定义输入格式",
          link: "/guide/advance/custom"
        }
      ]
    },
    {
      text: "固定模块",
      children: modules.const.map(k => ({
        text: k[0],
        link: "../guide/modules/" + k[1]
      }))
    },
    {
      text: "可选模块",
      children: modules.optional.map(k => ({
        text: k[0],
        link: "../guide/modules/" + k[1]
      }))
    }
  ]
}

export default sidebar
