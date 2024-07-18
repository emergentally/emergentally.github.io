<template>
  <div>
    <b-row>
      <b-col md="12">
        <ContentQuery :path="localePath($route.path)" find="one" v-slot="{ data }">
          <template v-if="data?.title">
            <Head>
              <Title>{{config.public.title}}</Title>
              <Meta name="twitter:title" :content="`${config.public.title}`" />
              <Meta name="og:title" :content="`${config.public.title}`" />
            </Head>
            <ContentRenderer :value="data" />
          </template>
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
</script>
