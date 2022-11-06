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
          text: "Points to Note",
          link: "/guide/attention"
        },
        {
          text: "Basic Concepts",
          link: "/guide/concept"
        },
        {
          text: "Profile Management",
          link: "/guide/profile"
        },
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
          text: "Replace() Method",
          link: "/guide/replace"
        },
        {
          text: "Split() Method",
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
      text: "Required Module",
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
