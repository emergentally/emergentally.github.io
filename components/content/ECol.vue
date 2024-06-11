<template>
  <BCol
    :md="props.md">
    <slot />
  </BCol>
</template>
<script setup>
const props = defineProps({
  md: {
    type: [String]
  }
})
</script>