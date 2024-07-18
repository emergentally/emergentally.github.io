<template>
  <div>
    <b-row>
      <b-col md="12">
        <Head>
          <Title>{{config.public.title}}</Title>
          <Meta name="twitter:title" :content="`${config.public.title}`" />
          <Meta name="og:title" :content="`${config.public.title}`" />
        </Head>
        <ContentDoc v-slot="{doc}" :head="false">
          <Head>
            <Title>{{config.public.title}}</Title>
            <Meta name="twitter:title" :content="`${config.public.title}`" />
            <Meta name="og:title" :content="`${config.public.title}`" />
          </Head>
          <ContentRenderer :value="doc" :head="false" />
        </ContentDoc>
      </b-col>
    </b-row>
  </div>
</template>
<script setup>
const config = useRuntimeConfig()
</script>
