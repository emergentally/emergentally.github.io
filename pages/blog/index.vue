<template>
    <h1>Emergentally Blog</h1>
    <p class="lead">{{ $t('blog.learnMore') }}</p>
    <ContentList :path="blogPath" v-slot="{ list }">
      <BCard v-for="article in list" :key="article._path" class="mt-3">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <BButton :to="{path: article._path}">Read more &raquo;</BButton>
      </BCard>
    </ContentList>

</template>
<script setup>
const { locale, locales } = useI18n();
const blogPath = computed(() => {
    return locale.value==='en' ? '/blog' : `/${locale.value}/blog`
})
</script>