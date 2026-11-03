<template>
  <div v-if="doc">
    <EUntranslatedNotice v-if="isFallback" :english-path="englishPath" />
    <slot :doc="doc" />
  </div>
  <p v-else>Document not found</p>
</template>
<script setup>
// Like <ContentDoc>, but a page with no translation falls back to the
// English content, so switching language never leads to "Document not found".
//
// Both paths are looked up with a single find(), which returns an empty list
// for a missing page. A query that 404s (as <ContentDoc> does for a missing
// translation) is recorded during `nuxt generate` and fails the whole build.
const route = useRoute()
const path = computed(() => decodeURI(route.path).replace(/\/$/, '') || '/')
const englishPath = computed(() => path.value.replace(/^\/fr(?=\/|$)/, '') || '/')

const { data: docs } = await useAsyncData(`e-content-doc:${path.value}`, () =>
  queryContent().where({ _path: { $in: [path.value, englishPath.value] } }).find()
)

const doc = computed(() =>
  docs.value?.find(d => d._path === path.value) ??
  docs.value?.find(d => d._path === englishPath.value) ??
  null
)
const isFallback = computed(() => !!doc.value && doc.value._path !== path.value)
</script>
