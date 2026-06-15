<template>
  <section class="e-cta">
    <div class="inner">
      <div>
        <h2>
          <i18n-t keypath="home.cta.headline" tag="span">
            <template #emphasis>
              <span class="hi"><span class="hi-inner">{{ $t('home.cta.headlineEmphasis') }}</span></span>
            </template>
          </i18n-t>
        </h2>
        <p>{{ $t('home.cta.body') }}</p>
        <div class="actions">
          <nuxt-link :to="localePath('/get-in-touch/')" class="e-btn primary">
            {{ $t('home.cta.primary') }} →
          </nuxt-link>
          <a :href="`mailto:${email}`" class="e-btn ghost">
            {{ $t('home.cta.secondary') }}
          </a>
        </div>
      </div>
      <div class="team-card">
        <div class="heads">
          <img src="/markbrough-small.png" alt="Mark Brough" />
          <img src="/matt-geddes-small.png" alt="Matt Geddes" />
          <img src="/perismuthoni-small.png" alt="Peris Muthoni" />
          <img src="/xarrigeorge-small.png" alt="Xarri George" />
        </div>
        <h4>{{ $t('home.cta.teamTitle') }}</h4>
        <p>{{ $t('home.cta.teamBody') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const localePath = useLocalePath();
defineProps({
  email: { type: String, default: 'mark@emergentally.com' }
});
</script>

<style lang="scss" scoped>
.e-cta {
  @include full-bleed;
  padding: 80px 0;
  background: $green-mid;
  color: #fff;
  position: relative;
  overflow: hidden;
  &::before {
    content: ""; position: absolute; inset: 0;
    background:
      radial-gradient(800px 400px at 100% -30%, rgba(#fff, 0.15), transparent 60%),
      repeating-linear-gradient(135deg, rgba(#fff, 0.04) 0 1px, transparent 1px 24px);
  }
}
.inner {
  @include inner-container;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 48px;
  align-items: center;
  @media (max-width: $bp-lg) { grid-template-columns: 1fr; }
}
h2 {
  font-family: $tango;
  font-weight: 700;
  font-size: clamp(40px, 5vw, 64px);
  letter-spacing: -0.025em;
  line-height: 1;
  margin: 0 0 18px;
  max-width: 18ch;
  text-wrap: balance;
  color: #fff;
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
    background: rgba(0, 0, 0, 0.25);
    z-index: -1;
  }
}
:deep(.hi-inner) {
  display: inline-block;
  transform: skew(10deg);
}


p { margin: 0 0 28px; font-size: 18px; color: #e2eed1; line-height: 1.5; max-width: 44ch; }
.actions { display: flex; gap: 14px; flex-wrap: wrap; }
.e-btn {
  @include btn-base;
  &.primary { background: #fff; color: $near-black; }
  &.ghost {
    color: #fff;
    border-color: rgba(#fff, 0.6);
    &:hover { background-color: $near-black; color: #fff; border-color: rgba(#fff, 0.6); }
  }
}
.team-card {
  background: rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(#fff, 0.15);
  padding: 26px;
  border-radius: $radius;
  .heads {
    display: flex; align-items: center; margin-bottom: 14px;
    img {
      width: 60px; height: 60px;
      border-radius: 50%;
      border: 2px solid $green-mid;
      box-shadow: 0 0 0 2px #fff;
      background: #fff;
      margin-left: -10px;
      object-fit: cover;
      &:first-child { margin-left: 0; }
    }
  }
  h4 { margin: 0 0 4px; font-family: $tango; font-size: 18px; color: #fff; }
  p { margin: 0; font-size: 13.5px; color: #d2dec1; line-height: 1.5; }
}
</style>
