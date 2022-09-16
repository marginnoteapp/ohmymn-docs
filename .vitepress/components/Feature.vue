<script setup lang="ts">
import VPFeatures from './VPFeatures.vue';
const features = {
  "Developer": [
    {
      title: "Modern Development Framework",
      details: "使用 TypeScript 开发，ESbuild 打包。封装大量 API，助力你开发更加强大的插件。"
    },
    {
      title: "Control Panel & Profile Management",
      details: "轻松创建具有控制面板的插件，拥有强大的配置管理功能。"
    },
    {
      title: "Modular Development",
      details: "像搭积木一样不断累加模块，最终开发出强大的插件。"
    },
  ],
  "General User": [
    {
      title: "Custom",
      details: "有了控制面板之后，MarginNote 插件终于可以自定义了。"
    },
    {
      title: "Automation",
      details: "无需手动开关插件，一切都将按照你的要求自动执行。"
    },
    {
      title: "Collaboration",
      details: "不同模块之间不仅不会相互影响，还可以相互协作。"
    },
    {
      title: "Gesture",
      details: "通过手势快速对脑图卡片进行处理，效率满分。"
    }
  ],
}
</script>

<template>
  <VPFeatures :features="features"></VPFeatures>
</template>
