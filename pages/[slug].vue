<template>
  <div>
    <ContentQuery :path="pageLocalePath" find="one" v-slot="{ data }">
      <Head>
        <Title>{{ data.title }} | {{config.public.title}}</Title>
        <Meta name="twitter:title" :content="`${data.title} | ${config.public.title}`" />
        <Meta name="og:title" :content="`${data.title} | ${config.public.title}`" />
      </Head>
      <ContentRenderer :value="data" />
      {{ pageLocalePath }}
    </ContentQuery>
  </div>
</template>
<script setup>
const i18n = useI18n();
const { t, locale } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const route = useRoute();
const pageLocalePath = computed(() => {
  console.log(localePath(route.path))
  return localePath(route.path)
})
</script>