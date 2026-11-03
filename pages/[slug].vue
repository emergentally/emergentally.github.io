<template>
  <div>
    <EContentDoc v-slot="{doc}">
      <Head>
        <Title>{{ doc?.title }} | {{config.public.title}}</Title>
        <Meta name="twitter:title" :content="`${doc?.title} | ${config.public.title}`" />
        <Meta property="og:title" :content="`${doc?.title} | ${config.public.title}`" />
        <template v-if="doc?.description">
          <Meta name="description" :content="doc.description" />
          <Meta name="twitter:description" :content="doc.description" />
          <Meta property="og:description" :content="doc.description" />
        </template>
      </Head>
      <div class="mt-4 mb-4">
        <ContentRenderer :value="doc" :head="false" />
      </div>
    </EContentDoc>
  </div>
</template>
<script setup>
const i18n = useI18n();
const config = useRuntimeConfig()
</script>