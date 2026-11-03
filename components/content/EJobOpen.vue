<template>
  <div>
    <slot v-if="open" />
    <EAlert v-else variant="secondary" class="fs-5">{{ $t('jobs.closed') }}</EAlert>
  </div>
</template>
<script setup>
const open = useJobOpen();
</script>
