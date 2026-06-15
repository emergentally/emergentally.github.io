<template>
  <section class="e-hero">
    <div class="bg"></div>
    <div class="inner">
      <h1>
        <i18n-t keypath="home.hero.headline" tag="span">
          <template #emphasis>
            <span class="hi"><span class="hi-inner">{{ $t('home.hero.headlineEmphasis') }}</span></span>
          </template>
        </i18n-t>
      </h1>
      <p class="lede">{{ $t('home.hero.lede') }}</p>
      <div class="ctas">
        <nuxt-link :to="localePath('/development-dashboard')" class="e-btn primary">
          {{ $t('home.hero.ctaPrimary') }} →
        </nuxt-link>
        <nuxt-link :to="localePath('/get-in-touch/')" class="e-btn ghost">
          {{ $t('home.hero.ctaSecondary') }}
        </nuxt-link>
      </div>
    </div>
    <div class="caption">{{ $t('home.hero.imageCaption') }}</div>
  </section>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
.e-hero {
  @include full-bleed;
  position: relative;
  padding: 70px $pad-x 70px;
  background: $forest;
  color: $cream;
  overflow: hidden;
}
.bg {
  position: absolute; inset: 0;
  background-image: url(/francophone-west-africa.jpeg);
  background-size: cover;
  background-position: center 30%;
  filter: saturate(0.85) brightness(0.5);
}
.e-hero::after {
  content: "";
  position: absolute; inset: 0;
  background:
    linear-gradient(180deg, rgba($near-black, 0.4) 0%, rgba($near-black, 0.8) 100%),
    linear-gradient(110deg, rgba(20, 40, 10, 0.55) 0%, transparent 60%);
}
.inner {
  position: relative;
  z-index: 1;
  max-width: $inner-max;
  margin: 0 auto;
}
.kicker {
  font-family: $tango;
  font-size: 13px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: $green-light;
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 28px;
}
.pip {
  width: 8px; height: 8px;
  background: $green-bright;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba($green-bright, 0.2);
}
h1 {
  font-family: $tango;
  font-weight: 700;
  //font-size: clamp(48px, 7.5vw, 112px);
  line-height: 0.95;
  letter-spacing: -0.03em;
  margin: 0 0 32px;
  max-width: 18ch;
  color: #fff;
  text-wrap: balance;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}
:deep(.hi) {
  position: relative;
  padding: 0 12px;
  color: #fff;
  display: inline-block;
  margin: 0 -2px;
  transform: skew(-10deg);
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: $green-mid;
    z-index: -1;
  }
}
:deep(.hi-inner) {
  display: inline-block;
  transform: skew(10deg);
}
.lede {
  font-size: 22px;
  line-height: 1.5;
  color: #e2ddca;
  max-width: 56ch;
  margin: 0 0 36px;
  text-wrap: pretty;
  font-weight: 400;
}
.ctas { display: flex; gap: 14px; flex-wrap: wrap; }
.e-btn {
  @include btn-base;
  &.primary { background: $green-bright; color: #fff; }
  &.ghost {
    color: #fff;
    border-color: rgba(#fff, 0.5);
    background: transparent;
    &:hover { background-color: #fff; color: $near-black; border-color: rgba(#fff, 0.6); }
  }
}
.caption {
  position: absolute;
  right: $pad-x; bottom: 24px;
  font-family: $tango;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(#fff, 0.55);
  z-index: 2;
}

@media (max-width: $bp-md) {
  .e-hero { padding: 56px $pad-x-sm 56px; }
  h1 { font-size: 44px; }
  .lede { font-size: 17px; }
  .caption { display: none; }
}
</style>
