<script setup lang="ts">
import VPFeatures from './VPFeatures.vue';
const features = {
  "普通用户": [
    {
      title: "自定义",
      details: "有了控制面板之后，你可以将插件改造成你想要的模样。"
    }, {
      title: "模块相互协作",
      details: "OhMyMN 作为控制面板，可以控制不同模块的执行顺序，使得模块之间可以相互协作。"
    }, {
      title: "不打断学习",
      details: "拒绝一切会干扰正常学习和摘录的触发方式。"
    }
  ],
  "插件开发者": [
    {
      title: "现代化的开发框架",
      details: "你可以使用 TypeScript 进行开发，可以进行类型检查。"
    }, {
      title: "模块化",
      details: "你可以使用 TypeScript 进行开发，可以进行类型检查。"
    }, {
      title: "控制面板",
      details: "现在你可以使用控制面板来管理你的插件。"
    },
  ]
}
</script>

<template>
  <VPFeatures :features="features"></VPFeatures>
</template>
