<template>
  <b-row>
    <b-col md="6">
      <ContentList :query="queryPrevious">
        <template #default="{list}">
          <div class="d-flex d-flex-row mt-3" v-for="article in list" :key="article._path">
            <div class="pe-2 fs-1 align-self-center">
              <NuxtLink :to="{path: article._path}"><font-awesome :icon="['fas', 'caret-left']" /></NuxtLink>
            </div>
            <div class="flex-fill">
              <small class="text-muted mb-0 fst-italic">{{ $t('blog.previousArticle') }}</small>
              <h4 class="mb-0"><NuxtLink :to="{path: article._path}">{{ article.title }}</NuxtLink></h4>
              <small class="text-muted">{{ formatDate(article.date) }}</small>
            </div>
          </div>
        </template>
        <template #not-found>
        </template>
      </ContentList>
    </b-col>
    <b-col md="6" class="text-end">
      <ContentList :query="queryNext">
        <template #default="{list}">
          <div class="d-flex d-flex-row mt-3" v-for="article in list" :key="article._path">
            <div class="flex-fill">
              <small class="text-muted mb-0 fst-italic">{{ $t('blog.nextArticle') }}</small>
              <h4 class="mb-0"><NuxtLink :to="{path: article._path}">{{ article.title }}</NuxtLink></h4>
              <small class="text-muted">{{ formatDate(article.date) }}</small>
            </div>
            <div class="ps-2 fs-1 align-self-center">
              <NuxtLink :to="{path: article._path}"><font-awesome :icon="['fas', 'caret-right']" /></NuxtLink>
            </div>
          </div>
        </template>
        <template #not-found>
        </template>
      </ContentList>
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const i18n = useI18n();
const config = useRuntimeConfig()
const { locale, locales } = useI18n();
const props = defineProps({
  date: String
})
const formatDate = (value) => {
  const theDate = new Date(value)
  const localeFormat = locale.value == 'en' ? 'en-GB' : locale.value
  const formatter = new Intl.DateTimeFormat(localeFormat, { dateStyle: 'long' });
  return formatter.format(theDate)
}
const blogPath = computed(() => {
    return locale.value==='en' ? '/blog' : `/${locale.value}/blog`
})
const queryPrevious: QueryBuilderParams = {
  path: blogPath.value,
  sort: [{ date: -1 }],
  where: ({ date: { $lt: props.date }})
}
const queryNext: QueryBuilderParams = {
  path: blogPath.value,
  sort: [{ date: 1 }],
  where: ({ date: { $gt: props.date }})
}
</script>