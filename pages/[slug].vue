<template>
  <div>
    <ContentQuery :path="localizedPath($route.path)" find="one" v-slot="{ data }">
      <template v-if="data?.title">
        <Head>
          <Title>{{ data.title }} | {{config.public.title}}</Title>
          <Meta name="twitter:title" :content="`${data.title} | ${config.public.title}`" />
          <Meta name="og:title" :content="`${data.title} | ${config.public.title}`" />
        </Head>
        <ContentRenderer :value="data" />
      </template>
    </ContentQuery>
  </div>
</template>
<script setup>

const i18n = useI18n();
function localizedPath(path) {
  // Use this.$i18n.locale to get the current locale
  const locale = i18n.locale.value;
  // Add the locale to the path
  if (path.startsWith(`/${locale}/`)) {
    return path
  } else {
    return `/${locale}${path}`;
  }
}
const config = useRuntimeConfig()
</script>