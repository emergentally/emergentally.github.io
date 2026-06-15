<template>
  <section class="e-insights">
    <div class="inner">
      <div class="head">
        <h2>{{ $t('home.insights.headline') }}</h2>
        <nuxt-link :to="localePath('/blog/')">{{ $t('home.insights.all') }} →</nuxt-link>
      </div>
      <ContentList :query="query" v-slot="{ list }">
        <div class="grid">
          <article
            v-for="article in list"
            :key="article._path"
            class="a"
          >
            <div class="img">
              <img :src="article.imgURL" :alt="article.imgAlt || article.title" />
              <span class="tag">{{ article.tag || $t('home.insights.defaultTag') }}</span>
            </div>
            <div class="body">
              <span class="date">{{ formatDate(article.date) }}</span>
              <h3>
                <nuxt-link :to="{ path: article._path }">{{ article.title }}</nuxt-link>
              </h3>
              <p>{{ article.description }}</p>
              <nuxt-link :to="{ path: article._path }" class="more">
                {{ $t('home.insights.readMore') }} →
              </nuxt-link>
            </div>
          </article>
        </div>
      </ContentList>
    </div>
  </section>
</template>

<script setup>
const localePath = useLocalePath();
const { locale } = useI18n();

const formatDate = (value) => {
  if (!value) return '';
  const theDate = new Date(value);
  const localeFormat = locale.value === 'en' ? 'en-GB' : locale.value;
  return new Intl.DateTimeFormat(localeFormat, { dateStyle: 'long' }).format(theDate);
};

const blogPath = computed(() =>
  locale.value === 'en' ? '/blog' : `/${locale.value}/blog`
);

const query = computed(() => ({
  path: blogPath.value,
  sort: [{ date: -1 }],
  limit: 3
}));
</script>

<style lang="scss" scoped>
.e-insights {
  @include full-bleed;
  padding: 96px 0;
  background: $cream;
  border-bottom: 1px solid $border-warm;
}
.inner { @include inner-container; }
.head {
  display: flex; justify-content: space-between; align-items: end;
  margin-bottom: 36px;
  h2 {
    margin: 0;
    font-family: $tango;
    font-weight: 700;
    font-size: clamp(32px, 3.8vw, 48px);
    letter-spacing: -0.02em;
    color: $near-black;
  }
  a {
    font-family: $tango;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: $near-black;
    text-decoration: none;
    border-bottom: 1px solid $near-black;
    padding-bottom: 2px;
  }
}
.grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.a {
  background: #fff;
  border: 1px solid $border-warm;
  border-radius: $radius;
  overflow: hidden;
  display: flex; flex-direction: column;
  .img {
    height: 220px;
    background: $border-warm;
    overflow: hidden;
    position: relative;
    img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .tag {
      position: absolute; top: 14px; left: 14px;
      background: $green-bright;
      color: $near-black;
      font-family: $tango;
      font-size: 11px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 4px 10px;
    }
  }
  .body { padding: 22px 22px 24px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
  .date { font-family: $tango; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: $grey-mid; }
  h3 {
    font-family: $tango; font-size: 22px; letter-spacing: -0.012em; line-height: 1.2; margin: 0;
    a { color: $near-black; text-decoration: none; &:hover { color: $green-kicker; } }
  }
  p { margin: 0; font-size: 14px; color: $body-grey; line-height: 1.5; }
  .more { margin-top: auto; font-family: $tango; font-size: 13px; color: $green-kicker; text-decoration: none; }
}

@media (max-width: $bp-lg) {
  .grid { grid-template-columns: 1fr; }
}
</style>
