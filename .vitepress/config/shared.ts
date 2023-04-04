import media from ".vitepress/markdown-it/media"
import { font, github, ogImage, ogUrl, title } from ".vitepress/meta"
import { defineConfig } from "vitepress"

export const sharedConfig = defineConfig({
  title,
  markdown: {
    lineNumbers: true,
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark"
    },
    config(md) {
      return md.use(media)
    }
  },

  head: [
    ["meta", { name: "naive-ui-style" }],
    ["meta", { name: "theme-color", content: "#e9dd1b" }],
    ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
    [
      "link",
      {
        rel: "alternate icon",
        href: "/favicon.ico",
        type: "image/png",
        sizes: "16x16"
      }
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "ohmymn, marginnote, addon"
      }
    ],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { name: "twitter:title", content: title }],
    ["meta", { name: "twitter:image", content: ogImage }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["link", { href: font, rel: "stylesheet" }],
    ["link", { href: font, rel: "stylesheet" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180"
      }
    ]
  ],

  themeConfig: {
    logo: "/logo.svg",
    outline: [2, 3],

    socialLinks: [{ icon: "github", link: github }],

    footer: {
      message: "Released under the MIT License.",
      copyright:
        "Copyright © 2021-PRESENT MarginNote, ourongxing, and contributors."
    }
  }
})
