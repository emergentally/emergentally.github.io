<template>
  <BCard
    :overlay="props.overlay"
    :header="props.header"
    :img-src="props.imgSrc">
    <slot />
  </BCard>
</template>
<script setup>
const props = defineProps({
  header: {
    type: [String]
  },
  imgSrc: {
    type: [String],
    default: null
  },
  overlay: {
    type: [Boolean],
    default: false
  }
})
</script>