<template>
    <ContentList :query="query" v-slot="{ list }">
      <BCard v-for="article in list" :key="article._path" class="mt-3">
        <h2>{{ article.title }}</h2>
        <h5 class="text-muted">{{ formatDate(article.date) }}</h5>
        <p>{{ article.description }}</p>
        <NuxtLink :to="{path: article._path}">Read more &raquo;</NuxtLink>
      </BCard>
    </ContentList>
</template>
<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const i18n = useI18n();
const config = useRuntimeConfig()
const { locale, locales } = useI18n();
const formatDate = (value) => {
  const theDate = new Date(value)
  const localeFormat = locale.value == 'en' ? 'en-GB' : locale.value
  const formatter = new Intl.DateTimeFormat(localeFormat, { dateStyle: 'long' });
  return formatter.format(theDate)
}
const blogPath = computed(() => {
    return locale.value==='en' ? '/blog' : `/${locale.value}/blog`
})
const query: QueryBuilderParams = { path: blogPath.value, sort: [{ date: -1 }] }
</script>