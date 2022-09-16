import { defineConfig } from "vitepress"
import { version } from "../package.json"
import media from "./markdown-it/media"
import {
  contributing,
  font,
  github,
  ogImage,
  ogUrl,
  releases,
  ohmymnDescription,
  ohmymnName
} from "./meta"
import sidebar from "./sidebar"

export default defineConfig({
  lang: "en-US",
  title: ohmymnName,
  description: ohmymnDescription,
  head: [
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
    ["meta", { property: "og:title", content: ohmymnName }],
    ["meta", { property: "og:description", content: ohmymnDescription }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { name: "twitter:title", content: ohmymnName }],
    ["meta", { name: "twitter:description", content: ohmymnDescription }],
    ["meta", { name: "twitter:image", content: ogImage }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["link", { href: font, rel: "stylesheet" }],
    // ["link", { rel: "mask-icon", href: "/logo.svg", color: "#ffffff" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180"
      }
    ]
  ],
  lastUpdated: true,
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
  themeConfig: {
    logo: "/logo.svg",
    outline: "deep",
    outlineTitle: "TOC",
    editLink: {
      pattern: "https://github.com/marginnoteapp/ohmymn-docs/tree/main/:path",
      text: "Edit this page on GitHub"
    },

    // algolia: {
    //   appId: "58GKGEP8Q0",
    //   apiKey: "27d364ba4e1ef8bd5f374377f0941845",
    //   indexName: "doc-cn"
      // searchParameters: {
      //   facetFilters: ['tags:en'],
      // },
    // },

    localeLinks: {
      text: "English",
      items: [{ text: "简体中文", link: "https://ohmymn.marginnote.cn" }]
    },

    socialLinks: [{ icon: "github", link: github }],

    footer: {
      message: "Released under the MIT License.",
      copyright:
        "Copyright © 2021-PRESENT MarginNote, ourongxing, and contributors."
    },

    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Devlopment", link: "/dev/" },
      { text: "API", link: "/api/" },
      {
        text: `v${version}`,
        items: [
          {
            text: "Release Notes",
            link: releases
          }
        ]
      }
    ],
    sidebar
  }
})
