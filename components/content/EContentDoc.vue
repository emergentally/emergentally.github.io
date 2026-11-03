<template>
  <ContentDoc :head="false">
    <template #default="{ doc }">
      <slot :doc="doc" />
    </template>
    <template #not-found>
      <ContentDoc v-if="englishPath !== route.path" :path="englishPath" :head="false">
        <template #default="{ doc }">
          <EUntranslatedNotice :english-path="englishPath" />
          <slot :doc="doc" />
        </template>
      </ContentDoc>
    </template>
  </ContentDoc>
</template>
<script setup>
// Like <ContentDoc>, but a page with no translation falls back to the
// English content, so switching language never leads to "Document not found".
const route = useRoute()
const englishPath = computed(() => route.path.replace(/^\/fr(?=\/|$)/, '') || '/')
</script>
