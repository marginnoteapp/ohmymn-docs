<script setup lang="ts">
import VPFeatures from './VPFeatures.vue';
const features = {
  "Developer": [
    {
      title: "Modern Development Framework",
      details: "Developed with TypeScript, bundled with ESbuild. A lot of APIs are encapsulated to help you develop more powerful mnaddon."
    },
    {
      title: "Control Panel & Profile Management",
      details: "Easily create mnaddon with control panels, with powerful profile management."
    },
    {
      title: "Modular Development",
      details: "Develop mnaddon with modular development, just like building blocks."
    },
  ],
  "Normal User": [
    {
      title: "Custom",
      details: "With the control panel, MarginNote addon can finally be customized."
    },
    {
      title: "Automation",
      details: "No need to manually turn on the addon, everything will be executed automatically according to your requirements."
    },
    {
      title: "Collaboration",
      details: "Different modules will not only not affect each other, but also can cooperate with each other."
    },
    {
      title: "Gesture",
      details: "Quickly process the mind map card through gestures, full score efficiency."
    }
  ],
}
</script>

<template>
  <VPFeatures :features="features"></VPFeatures>
</template>
