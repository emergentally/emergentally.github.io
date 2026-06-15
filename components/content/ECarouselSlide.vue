<template>
  <BCarouselSlide
    :caption="props.caption"
    :img-src="props.imgSrc">
    <slot />
  </BCarouselSlide>
</template>
<script setup>
const props = defineProps({
  caption: {
    type: [String],
    default: false
  },
  imgSrc: {
    type: [String],
    default: false
  },
})
</script>