<template>
  <BAlert
    :model-value="true"
    :variant="props.variant"
    :class="props.class">
    <slot />
  </BAlert>
</template>
<script setup>
const props = defineProps({
  variant: {
    type: [String],
    required: true
  },
  class: {
    type: [String]
  }
})
</script>