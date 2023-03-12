<template>
  <div>
    <div v-for="page in pages">
      <nuxt-content :document="page" />
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, app, error }) {
    const slug = params.slug || "index"
    const pages = await $content(app.i18n.locale, slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return { pages }
  }
}
</script>