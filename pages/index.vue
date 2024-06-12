<template>
  <div>
    <b-row>
      <b-col md="12">
        <img
          src="/liberia-project-dashboard.png"
          width="350px"
          align="right" />
        <ContentQuery :path="localizedPath($route.path)" find="one" v-slot="{ data }">
          <template v-if="data?.title">
            <Head>
              <Title>{{config.public.title}}</Title>
              <Meta name="twitter:title" :content="`${config.public.title}`" />
              <Meta name="og:title" :content="`${config.public.title}`" />
            </Head>
            <ContentRenderer :value="data" />
          </template>
        </ContentQuery>
      </b-col>
    </b-row>
  </div>
</template>
<script setup>
const i18n = useI18n();
function localizedPath(path) {
  // Use this.$i18n.locale to get the current locale
  const locale = i18n.locale.value;
  // Add the locale to the path
  if (path.includes(locale)) {
    return path
  } else {
    return `/${locale}${path}`;
  }
}
const config = useRuntimeConfig()
</script>
