<template>
  <div>
    <ContentDoc v-slot="{doc}" :head="false">
      <Head>
        <Title>{{ doc?.title }} | {{config.public.title}}</Title>
        <Meta name="twitter:title" :content="`${doc?.title} | ${config.public.title}`" />
        <Meta name="og:title" :content="`${doc?.title} | ${config.public.title}`" />
      </Head>
      <div class="mt-4 mb-4">
        <ContentRenderer :value="doc" :head="false" />
      </div>
    </ContentDoc>
  </div>
</template>
<script setup>
const i18n = useI18n();
const config = useRuntimeConfig()
</script>