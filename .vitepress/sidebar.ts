import { DefaultTheme } from "vitepress"
import modules from "../modules"
const sidebar: DefaultTheme.Sidebar = {
  "/dev/": [],
  "/api/": [],
  "/": [
    {
      text: "Foundation",
      collapsible: true,
      items: [
        {
          text: "Introduction",
          link: "/guide/"
        },
        {
          text: "Basic Concepts",
          link: "/guide/concept"
        },
        {
          text: "Points to Note",
          link: "/guide/attention"
        },
        {
          text: "Profile Management",
          link: "/guide/profile"
        },
        {
          text: "MN Tips",
          link: "/guide/tips"
        }
      ]
    },
    {
      text: "Advanced",
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: "Regular Expressions",
          link: "/guide/regex"
        },
        {
          text: "replace() Function",
          link: "/guide/replace"
        },
        {
          text: "split() Function",
          link: "/guide/split"
        },
        {
          text: "Template Syntax",
          link: "/guide/mustache"
        },
        {
          text: "Template Variable",
          link: "/guide/vars"
        },
        {
          text: "Custom Input Format",
          link: "/guide/custom"
        },
        {
          text: "Auto Numbering",
          link: "/guide/serial"
        }
      ]
    },
    {
      text: "Fixed Module",
      collapsible: true,
      collapsed: false,
      items: modules.const.map(k => ({
        text: k[0],
        link: "/guide/modules/" + k[1]
      }))
    },
    {
      text: "Optional Module",
      collapsible: true,
      collapsed: true,
      items: modules.optional.map(k => ({
        text: k[0],
        link: "/guide/modules/" + k[1]
      }))
    }
  ]
}

export default sidebar
