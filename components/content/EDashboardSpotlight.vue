<template>
  <section class="e-dash">
    <div class="inner">
      <div class="head">
        <div>
          <div class="kicker">{{ $t('home.dashboard.kicker') }}</div>
          <h2>{{ $t('home.dashboard.headline') }}</h2>
        </div>
        <div class="badge">
          <span class="big">{{ $t('home.dashboard.badgeTitle') }}</span>
          {{ $t('home.dashboard.badgeBody') }}
        </div>
      </div>

      <div class="split">
        <div class="shot">
          <div class="img-container">
            <img class="fadeout" src="/2026-liberia-development-dashboard-long.png" :alt="$t('home.dashboard.imageAlt')" />
          </div>
          <div class="row">
            <span>{{ $t('home.dashboard.imageCaption') }}</span>
            <span class="flag-group">
              <span class="flag lr" title="Liberia"></span>
              <span class="flag ng" title="Nigeria"></span>
            </span>
          </div>
        </div>
        <div class="feats">
          <div v-for="(f, i) in features" :key="i" class="item">
            <div class="n">{{ String(i + 1).padStart(2, '0') }}</div>
            <div>
              <h4>{{ f.title }}</h4>
              <p>{{ f.body }}</p>
            </div>
          </div>
          <div class="cta-row">
            <nuxt-link :to="localePath('/get-in-touch/')" class="e-btn primary">
              {{ $t('home.dashboard.ctaPrimary') }} →
            </nuxt-link>
            <nuxt-link :to="localePath('/development-dashboard')" class="e-btn ghost">
              {{ $t('home.dashboard.ctaSecondary') }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const localePath = useLocalePath();
const { tm, rt } = useI18n();
const features = computed(() =>
  tm('home.dashboard.features').map(f => ({ title: rt(f.title), body: rt(f.body) }))
);
</script>

<style lang="scss" scoped>
.e-dash {
  @include full-bleed;
  background: $cream;
  padding: 96px 0 64px;
}
.inner { @include inner-container; }
.head {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 56px;
  align-items: end;
  margin-bottom: 48px;
}
.kicker {
  @include kicker-line($green-kicker, 13px, 0.22em);
  margin-bottom: 18px;
}
.head h2 {
  font-family: $tango;
  font-weight: 700;
  font-size: clamp(40px, 5.6vw, 80px);
  letter-spacing: -0.028em;
  line-height: 0.96;
  margin: 0;
  max-width: 16ch;
  text-wrap: balance;
  color: $near-black;
}
.badge {
  background: $forest;
  color: #fff;
  padding: 14px 18px;
  border-radius: $radius;
  font-family: $tango;
  font-size: 13px;
  letter-spacing: 0.08em;
  max-width: 240px;
  line-height: 1.4;
  white-space: initial;
  .big {
    font-size: 18px;
    color: $green-bright;
    display: block;
    margin-bottom: 4px;
    letter-spacing: 0.02em;
  }
}
.split {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 56px;
  align-items: stretch;
}
.shot {
  background: #fff;
  padding: 18px;
  border: 1px solid $border-warm;
  border-radius: $radius;
  box-shadow: 0 30px 60px -30px rgba($near-black, 0.18);
  .img-container {
    max-height: 600px;
    overflow: hidden;
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 90%, transparent 100%);
  }
  img { 
    width: 100%; display: block; border: 1px solid $border-light; 
    object-fit: contain; 
  }
  .row {
    display: flex; gap: 18px; align-items: center; justify-content: space-between;
    margin-top: 14px;
    font-family: $tango;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: $grey-mid;
  }
}
.flag-group { display: flex; gap: 6px; }
.flag {
  width: 22px; height: 14px;
  border-radius: 1px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  &.lr {
    background:
      linear-gradient(180deg, #002b7f 0 8px, transparent 8px),
      repeating-linear-gradient(180deg, #bf0a30 0 1px, #fff 1px 2px);
    background-size: 9px 8px, 100% 100%;
    background-repeat: no-repeat, repeat;
  }
  &.ng {
    background: linear-gradient(90deg, #008753 33%, #fff 33%, #fff 66%, #008753 66%);
  }
}
.feats {
  background: $forest;
  color: $cream;
  padding: 32px;
  display: flex; flex-direction: column;
  border-radius: $radius;
}
.item {
  padding: 18px 0;
  border-top: 1px solid #2a3d22;
  display: grid; grid-template-columns: 28px 1fr; gap: 14px;
  &:first-child { border-top: 2px solid $green-bright; }
  .n { font-family: $tango; font-size: 14px; color: $green-bright; letter-spacing: 0.06em; }
  h4 { font-family: $tango; font-size: 18px; letter-spacing: -0.005em; margin: 0 0 4px; color: #fff; }
  p { margin: 0; font-size: 13.5px; line-height: 1.55; color: $grey-lighter; }
}
.cta-row {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid #2a3d22;
  display: flex; gap: 14px; align-items: center; flex-wrap: wrap;
}
.e-btn {
  @include btn-base(sm);
  &.primary { 
    background: $green-bright;
    color: #fff;
  }
  &.ghost { color: #fff; border-color: rgba(#fff, 0.4); }
}

@media (max-width: $bp-lg) {
  .head { grid-template-columns: 1fr; }
  .split { grid-template-columns: 1fr; }
}
</style>
