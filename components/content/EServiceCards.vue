<template>
  <section class="e-services">
    <div class="inner">
      <div class="head">
        <div>
          <div class="kicker">{{ $t('home.services.kicker') }}</div>
          <h2>{{ $t('home.services.headline') }}</h2>
        </div>
        <div class="right">{{ $t('home.services.lede') }}</div>
      </div>
      <div class="grid">
        <div
          v-for="(s, i) in services"
          :key="i"
          class="s"
          :class="{ featured: s.featured }"
        >
          <div class="num">{{ s.kicker }}</div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.body }}</p>
          <ul>
            <li v-for="(b, j) in s.bullets" :key="j">{{ b }}</li>
          </ul>
          <nuxt-link :to="localePath(s.link)" class="more">
            {{ s.linkLabel }} →
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const localePath = useLocalePath();
const { tm, rt } = useI18n();

const services = computed(() => {
  const items = tm('home.services.items');
  return items.map((s, i) => ({
    kicker: rt(s.kicker),
    title: rt(s.title),
    body: rt(s.body),
    bullets: tm(`home.services.items[${i}].bullets`).map(b => rt(b)),
    link: rt(s.link),
    linkLabel: rt(s.linkLabel),
    featured: !!s.featured
  }));
});
</script>

<style lang="scss" scoped>
.e-services {
  @include full-bleed;
  padding: 96px 0;
  background: $cream;
  border-bottom: 1px solid $border-warm;
}
.inner { @include inner-container; }
.head {
  display: grid; grid-template-columns: 1fr 1fr; gap: 48px;
  align-items: end; margin-bottom: 44px;
}
.kicker {
  @include kicker-line;
  margin-bottom: 12px;
}
.head h2 {
  font-family: $tango;
  font-weight: 700;
  font-size: clamp(36px, 4.4vw, 56px);
  letter-spacing: -0.022em;
  margin: 0; max-width: 22ch;
  text-wrap: balance;
  color: $near-black;
}
.right { font-size: 16px; line-height: 1.55; color: $body-grey; max-width: 48ch; }
.grid {
  display: grid; grid-template-columns: 1.3fr 1fr 1fr;
  gap: 24px;
}
.s {
  padding: 32px 28px;
  background: #fff;
  border: 1px solid $border-warm;
  border-radius: $radius;
  display: flex; flex-direction: column; gap: 16px;
  min-height: 340px;
  position: relative;
  &.featured {
    background: $forest;
    color: $cream;
    border-color: $forest;
    h3, .num { color: #fff; }
    p { color: $grey-lighter; }
    .num { color: $green-bright; }
    ul li::before { color: $green-bright; }
    .more { color: $green-bright; }
  }
}
.s .num {
  font-family: $tango;
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: $green-kicker;
}
.s h3 { font-family: $tango; font-size: 32px; letter-spacing: -0.018em; margin: 0; line-height: 1.05; }
.s p { margin: 0; font-size: 15px; line-height: 1.55; color: $body-grey; }
.s ul {
  margin: 0; padding: 0; list-style: none;
  display: flex; flex-direction: column; gap: 8px;
  font-size: 14px;
  li {
    padding-left: 18px; position: relative; line-height: 1.4;
    &::before { content: "✓"; position: absolute; left: 0; top: 0; color: $green-mid; font-weight: 700; }
  }
}
.more {
  margin-top: auto;
  font-family: $tango;
  font-size: 14px;
  letter-spacing: 0.04em;
  color: $green-kicker;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  align-self: flex-start;
}

@media (max-width: $bp-lg) {
  .head { grid-template-columns: 1fr; }
  .grid { grid-template-columns: 1fr; }
}
</style>
