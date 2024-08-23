<template>
  <div>
    <ContentDoc v-slot="{doc}" :head="false">
      <Head>
        <Title>{{ doc?.title }} | {{config.public.title}}</Title>
        <Meta name="twitter:title" :content="`${doc?.title} | ${config.public.title}`" />
        <Meta name="og:title" :content="`${doc?.title} | ${config.public.title}`" />
      </Head>
      <ContentRenderer :value="doc" :head="false" />
    </ContentDoc>
  </div>
</template>
<script setup>
const i18n = useI18n();
const config = useRuntimeConfig()
</script>