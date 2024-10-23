<template>
  <component :is="tag" :class="[textClass, colorClass]">
    <slot />
  </component>
</template>

<script setup lang="ts">
type Props = {
  type: 'title' | 'h1' | 'body' | 'caption' | 'semibold' | 'danger' | 'number-tab'
  color?: 'primary' | 'ghost'
}
const props = withDefaults(defineProps<Props>(), {
  type: 'h1'
})

const tag = computed(() => {
  if (props.type === 'title') {
    return 'h1'
  }
  if (props.type === 'h1') {
    return 'h2'
  }

  return 'p'
})
const textClass = computed(() => `text-${props.type}`)
const colorClass = computed(() => (props.color ? `color-${props.color}` : ''))
</script>

<style lang="scss" scoped>
.text-title {
  margin: 0;
  font-family: 'SF-Pro-Display-Bold', sans-serif;
  font-size: 40px;
  color: var(--color-primary-accent);
}

.text-h1 {
  margin: 0;
  font-family: 'SF-Pro-Text-Bold', sans-serif;
  font-size: 28px;
  letter-spacing: -1.45px;
  color: #000;
}

.text-body {
  margin: 0;
  font-family: 'SF-Pro-Text-Regular', sans-serif;
  font-size: 20px;
  letter-spacing: -1px;
  color: var(--color-text);
}

.text-caption {
  margin: 0;
  font-family: 'SF-Pro-Text-Regular', sans-serif;
  font-size: 14px;
  letter-spacing: -1px;
  color: #040405;
}

.text-semibold {
  margin: 0;
  font-family: 'SF-Pro-Text-Semibold', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text);
}

.text-number-tab {
  margin: 0;
  font-family: 'SF-Pro-Text-Regular', sans-serif;
  font-size: 14px;
  letter-spacing: -1px;
  color: var(--color-border);
}

.text-danger {
  margin: 0;
  font-family: 'SF-Pro-Text-Regular', sans-serif;
  font-size: 13px;
  color: var(--color-danger);
}

.color-primary {
  color: var(--color-primary-accent);
}

.color-ghost {
  color: var(--color-border);
}
</style>
