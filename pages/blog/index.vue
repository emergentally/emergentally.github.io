<template>
    <div class="mt-4 mb-4">
        <Head>
            <Title>{{ $t('menuItems.blog.text') }} | {{ config.public.title }}</Title>
            <Meta name="twitter:title" :content="`${$t('menuItems.blog.text')} | ${config.public.title}`" />
            <Meta property="og:title" :content="`${$t('menuItems.blog.text')} | ${config.public.title}`" />
            <Meta name="description" :content="$t('blog.learnMore')" />
            <Meta name="twitter:description" :content="$t('blog.learnMore')" />
            <Meta property="og:description" :content="$t('blog.learnMore')" />
        </Head>
        <h1>{{ $t('menuItems.blog.text') }}</h1>
        <p class="lead">{{ $t('blog.learnMore') }}</p>
        <BlogList />
    </div>

</template>
<script setup>
const config = useRuntimeConfig()
</script>