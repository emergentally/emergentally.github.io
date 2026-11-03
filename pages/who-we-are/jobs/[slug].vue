<template>
  <div>
    <EContentDoc v-slot="{doc}">
      <Head>
        <Title>{{ doc?.title }} | {{config.public.title}}</Title>
        <Meta name="robots" content="noindex" />
        <Meta name="twitter:title" :content="`${doc?.title} | ${config.public.title}`" />
        <Meta property="og:title" :content="`${doc?.title} | ${config.public.title}`" />
        <Meta name="description" :content="doc?.description" />
        <Meta name="twitter:description" :content="doc?.description" />
        <Meta property="og:description" :content="doc?.description" />
        <Meta name="twitter:card" content="summary" />
        <Meta name="twitter:image" content="https://emergentally.com/emergentally-logo-square.png" />
        <Meta property="og:image" content="https://emergentally.com/emergentally-logo-square.png" />
      </Head>
      <div class="mt-4 mb-4">
        <ContentRenderer :value="doc" :head="false" />
      </div>
    </EContentDoc>
  </div>
</template>
<script setup>
const config = useRuntimeConfig()
</script>
