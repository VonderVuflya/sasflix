<template>
  <div class="layout">
    <div class="main-container">
      <div @mouseover="title='kakaiprosto.ru'" @mouseleave="title='ikakprosto.ru'">
        <Text type="title">{{ title }}</Text>
      </div>

      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let title = ref('ikakprosto.ru')
</script>