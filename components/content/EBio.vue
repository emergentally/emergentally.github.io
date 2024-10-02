<template>
  <BCard
    class="mb-3"
    :header="props.name"
    header-tag="h2"
    header-text-variant="white"
    header-bg-variant="dark">
    <BCardImg
      :rounded="props.rounded"
      :src="props.src"
      align="left"
      class="bio-img me-4">
    </BCardImg>
    <BCardText>
      <slot />
    </BCardText>
  </BCard>
</template>
<style>
.bio-img {
  max-width: 150px;
  max-height: 150px;
}
</style>
<script setup>
const props = defineProps({
  name: {
    type: [String],
    default: null
  },
  rounded: {
    type: [String],
    default: null
  },
  src: {
    type: [String],
    default: null
  }
})
</script>