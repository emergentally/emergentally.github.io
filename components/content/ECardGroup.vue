<template>
  <BCardGroup
    :deck="props.deck">
    <slot />
  </BCardGroup>
</template>
<script setup>
const props = defineProps({
  deck: {
    type: [Boolean]
  }
})
</script>