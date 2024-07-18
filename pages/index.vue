<template>
  <div>
    <b-row>
      <b-col md="12">
        <ContentQuery :path="pageLocalePath" find="one" v-slot="{ data }">
          <Head>
            <Title>{{config.public.title}}</Title>
            <Meta name="twitter:title" :content="`${config.public.title}`" />
            <Meta name="og:title" :content="`${config.public.title}`" />
          </Head>
          <ContentRenderer :value="data" />
          {{ pageLocalePath }}
        </ContentQuery>
      </b-col>
    </b-row>
  </div>
</template>
<script setup>
const i18n = useI18n();
const { t, locale } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const route = useRoute();
const pageLocalePath = computed(() => {
  return localePath(route.path)
})
</script>
