<template>
  <div>
    <Head>
      <!-- Point search engines at the English original rather than this copy -->
      <Link rel="canonical" :href="`https://emergentally.com${canonicalPath}`" />
    </Head>
    <EAlert variant="secondary" class="fs-5 mt-4">{{ $t('untranslated') }}</EAlert>
  </div>
</template>
<script setup>
const props = defineProps({
  englishPath: {
    type: String,
    required: true
  }
})
const canonicalPath = computed(() => props.englishPath.replace(/\/?$/, '/'))
</script>
