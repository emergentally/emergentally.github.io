<template>
  <BCarousel
    :controls="props.controls"
    :indicators="props.indicators">
    <slot />
  </BCarousel>
</template>
<script setup>
const props = defineProps({
  controls: {
    type: [Boolean],
    default: false
  },
  indicators: {
    type: [Boolean],
    default: false
  }
})
</script>