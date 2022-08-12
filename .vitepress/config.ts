import { defineConfig } from "vitepress"
import media from "../scripts/markdown-it/media"
import { version } from "../package.json"
import { coreTeamMembers } from "../src/contributors"
import {
  font,
  ogImage,
  ogUrl,
  releases,
  ohmymnDescription,
  ohmymnName
} from "../docs-data"
import sidebar from "./sidebar"

export default defineConfig({
  title: ohmymnName,
  description: ohmymnDescription,
  markdown: {
    config: md => {
      md.use(media)
    }
  },
  head: [
    ["meta", { name: "theme-color", content: "#ffffff" }],
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
        name: "author",
        content: `${coreTeamMembers
          .map(c => c.name)
          .join(", ")} and ${ohmymnName} contributors`
      }
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "ohmymn, marginnote, addon"
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
  themeConfig: {
    repo: "marginnoteapp/ohmymn",
    logo: "/logo.svg",
    docsDir: ".",
    docsBranch: "main",
    editLinks: false,
    // editLink: {
    //   pattern: 'https://github.com/vitest-dev/vitest/tree/main/docs/:path',
    //   text: '为此页提供修改建议'
    // }

    lastUpdated: true,

    /**
    algolia: {
      appId: 'ZTF29HGJ69',
      apiKey: '9c3ced6fed60d2670bb36ab7e8bed8bc',
      indexName: 'vitest',
      // searchParameters: {
      //   facetFilters: ['tags:en']
      // }
    },
    */
    sidebar,
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "开发", link: "/dev/" },
      { text: "API", link: "/api/" },
      {
        text: "交流",
        items: [
          {
            text: "中文论坛",
            link: "http://bbs.marginnote.cn/"
          },
          {
            text: "英文论坛",
            link: "https://forum.marginnote.com/"
          }
        ]
      },
      {
        text: "语言",
        items: [
          {
            text: "English",
            link: ogUrl
          },
          {
            text: "简体中文",
            link: "/"
          }
        ]
      },
      {
        text: `v${version}`,
        link: releases
      }
    ]
  }
})
