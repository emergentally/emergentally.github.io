<template>
  <div>
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
        <e-hero />
        <e-partner-ticker />
        <e-impact-stats />
        <e-dashboard-spotlight />
        <e-service-cards />
        <e-insights-latest />
        <e-cta-demo />
      </ContentDoc>
  </div>
</template>
<script setup>
const config = useRuntimeConfig()
</script>
