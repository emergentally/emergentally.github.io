<template>
  <div>
      <Head>
        <Title>{{config.public.title}}</Title>
        <Meta name="twitter:title" :content="`${config.public.title}`" />
        <Meta property="og:title" :content="`${config.public.title}`" />
        <Meta name="description" :content="$t('meta.homeDescription')" />
        <Meta name="twitter:description" :content="$t('meta.homeDescription')" />
        <Meta property="og:description" :content="$t('meta.homeDescription')" />
      </Head>
      <ContentDoc v-slot="{doc}" :head="false">
        <Head>
          <Title>{{config.public.title}}</Title>
          <Meta name="twitter:title" :content="`${config.public.title}`" />
          <Meta property="og:title" :content="`${config.public.title}`" />
        </Head>
        <e-hero />
        <e-partner-ticker />
        <e-impact-stats />
        <e-dashboard-spotlight />
        <e-pull-quote image="none" />
        <e-service-cards />
        <e-insights-latest />
        <e-cta-demo />
      </ContentDoc>
  </div>
</template>
<script setup>
const config = useRuntimeConfig()
</script>
