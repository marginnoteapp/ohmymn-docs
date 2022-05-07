<script setup lang="ts">
import type { CoreTeam } from '../contributors'

defineProps<{
  avatar: CoreTeam['avatar']
  name: CoreTeam['name']
  github: CoreTeam['github']
  bbs?: CoreTeam['bbs']
  forum?: CoreTeam['forum']
  description: CoreTeam['description']
}>()
</script>

<template>
  <div text-center>
    <img loading="lazy" :src="avatar" width="100" height="100" rounded-full min-w-25 min-h-25 h-25 w-25 :alt="`${name}'s avatar`">
    <div text-xl mt-1 mb-1>
      {{ name }}
    </div>
    <div op60 v-html="description" />
    <div flex="~ inline gap-2" py-4 text-2xl>
      <a
        class="i-logo-mn inline-block text-current op30 hover:op100 mya transition duration-200"
        :href="`https://bbs.marginnote.cn/u/${bbs}`"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${name} on MarginNote BBS (Chinese)`"
      />
      <a
        class="i-carbon-logo-github inline-block text-current op30 hover:op100 mya transition duration-200"
        :href="`https://github.com/${github}`"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${name} on GitHub`"
      />
      <a
        class="i-logo-mn inline-block text-current op30 hover:op100 mya transition duration-200"
        :href="`https://forum.marginnote.com/u/${forum}`"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${name} on MarginNote Forum (English)`"
      />
    </div>
  </div>
</template>