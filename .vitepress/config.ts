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
  lang: "zh-CN",
  title: ohmymnName,
  description: ohmymnDescription,
  head: [
    ["meta", { name: "theme-color", content: "#729b1a" }],
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
    ["link", { rel: "mask-icon", href: "/logo.svg", color: "#ffffff" }],
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
    config(md) {
      return md.use(media)
    }
  },
  themeConfig: {
    logo: "/logo.svg",
    editLink: {
      repo: "marginnoteapp/ohmymn-docs",
      text: "为此页提供修改建议"
    },

    // algolia: {
    //   appId: "ZTF29HGJ69",
    //   apiKey: "9c3ced6fed60d2670bb36ab7e8bed8bc",
    //   indexName: "ohmymn"
    //   // searchParameters: {
    //   //   facetFilters: ['tags:en'],
    //   // },
    // },

    localeLinks: {
      text: "简体中文",
      items: [{ text: "English", link: "https://ohmymn.marginnote.com" }]
    },

    socialLinks: [{ icon: "github", link: github }],

    footer: {
      message: "Released under the MIT License.",
      copyright:
        "Copyright © 2021-PRESENT MarginNote, ourongxing, and contributors."
    },

    nav: [
      { text: "使用指南", link: "/guide/" },
      { text: "开发", link: "/dev/" },
      { text: "API", link: "/api/" },
      {
        text: `v${version}`,
        items: [
          {
            text: "版本发布",
            link: releases
          },
          {
            text: "社区指南",
            link: contributing
          }
        ]
      }
    ],
    sidebar
  }
})
