<template>
  <BButton
    :variant="props.variant"
    :to="{path: props.path}">
    <slot />
  </BButton>
</template>
<script setup>
const props = defineProps({
  variant: {
    type: [String],
    required: true
  },
  path: {
    type: [String],
    required: true
  }
})
</script>