<script setup lang="ts">
import { coreTeamMembers } from '../contributors'
import "uno.css"
</script>

<template>
  <div flex flex-col items-center>
    <div flex flex-col items-center p="t-10 md:t-20 b-10">
      <img src="/logo.svg" h="40 md:60" alt="OhMyMN logo" width="200" height="200" class="logo">
      <h1 text-3em md:text-4em font-light>
        OhMyMN
      </h1>
      <b>现在是 MarginNote 官方插件！</b>
      <p />
      <p text="1.2em center" leading-7 op60 font-normal tracking-wide>
        MarginNote 插件控制面板及开发框架
      </p>
      <div text-center flex flex-col sm:flex-row flex-wrap items-center gap-4 mt-5 children:my0>
        <a class="btn bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 saturate-80"
          href="/guide/" rel="noopener noreferrer">
          <span class="i-carbon:page-last inline-block text-lg" />
          <span ma>使用指南</span>
        </a>
        <a class="btn bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 saturate-80"
          href="https://bbs.marginnote.cn/t/topic/20501" rel="noopener noreferrer">
          <span class="i-carbon:download inline-block text-lg" />
          <span ma>立即下载</span>
        </a>
        <a class="btn bg-lime-500 hover:bg-lime-600 dark:bg-lime-600 dark:hover:bg-lime-700 saturate-80" href="/dev/"
          rel="noopener noreferrer">
          <span class="i-carbon:list-checked inline-block text-lg" />
          <span ma>开发文档</span>
        </a>
      </div>
    </div>

    <h2 id="meet-the-team" op50 font-normal pt-5 pb-2>
      认识一下团队
    </h2>
    <div grid="~ sm:cols-2 gap-x-8 gap-y-20 items-center" p-10>
      <Avatar v-for="c of coreTeamMembers" :key="c.github" v-bind="c" />
    </div>

    <h2 id="the-team" op50 font-normal pt-5 pb-2>
      贡献者
    </h2>
    <p op80 text-lg max-w-150 text-center leading-7>
      <Contributors />
      <br>
      <a href="https://github.com/mnaddon/ohmymn" rel="noopener noreferrer">加入我们</a>一起开发！
    </p>
    <p />
    <div mb-20></div>
  </div>
</template>

<style scoped>
.logo {
  transition: transform .5s ease;
}

.logo:hover {
  transform: rotate(540deg);
}
</style>