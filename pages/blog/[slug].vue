<template>
  <div>
    <ContentDoc v-slot="{doc}" :head="false">
      <ContentRenderer :value="doc" :head="false">
        <Head>
          <Title>{{ doc?.title }} | {{config.public.title}}</Title>
          <Meta name="twitter:title" :content="`${doc?.title} | ${config.public.title}`" />
          <Meta name="og:title" :content="`${doc?.title} | ${config.public.title}`" />
          <Meta name="description" :content="doc?.description" />
          <Meta name="twitter:description" :content="doc?.description" />
          <Meta name="twitter:image" :content="doc?.imgURL" />
          <Meta name="og:image" :content="doc?.imgURL" />
          <Meta name="twitter:image:alt" :content="doc?.imgAlt" />
        </Head>
        <h1>{{ doc.title }}</h1>
        <h5 class="text-muted">{{ formatDate(doc.date) }}</h5>
        <ContentRendererMarkdown :value="doc" />
      </ContentRenderer>
    </ContentDoc>
  </div>
</template>
<script setup>
const i18n = useI18n();
const config = useRuntimeConfig()
const { locale, locales } = useI18n();
const formatDate = (value) => {
  const theDate = new Date(value)
  const localeFormat = locale.value == 'en' ? 'en-GB' : locale.value
  const formatter = new Intl.DateTimeFormat(localeFormat, { dateStyle: 'long' });
  return formatter.format(theDate)
}
</script>