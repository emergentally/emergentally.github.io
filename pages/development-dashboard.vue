<template>
  <div>
      <Head>
        <Title>Development Dashboard | {{config.public.title}}</Title>
        <Meta name="twitter:title" :content="`Development Dashboard | ${config.public.title}`" />
        <Meta property="og:title" :content="`Development Dashboard | ${config.public.title}`" />
        <Meta name="description" :content="$t('meta.developmentDashboardDescription')" />
        <Meta name="twitter:description" :content="$t('meta.developmentDashboardDescription')" />
        <Meta property="og:description" :content="$t('meta.developmentDashboardDescription')" />
      </Head>
      <ContentDoc v-slot="{doc}" :head="false">
        <Head>
          <Title>Development Dashboard | {{config.public.title}}</Title>
          <Meta name="twitter:title" :content="`Development Dashboard | ${config.public.title}`" />
          <Meta property="og:title" :content="`Development Dashboard | ${config.public.title}`" />
        </Head>
        <e-dd-hero />
        <e-dd-showcase />
        <e-dd-narrative />
        <e-dd-pillars />
        <e-pull-quote namespace="developmentDashboard.pullQuote" image="none" />
        <e-dd-features />
        <e-dd-demo-cta />
      </ContentDoc>
  </div>
</template>
<script setup>
const config = useRuntimeConfig()
</script>
