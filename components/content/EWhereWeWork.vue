<template>
  <section class="e-where">
    <div class="inner">
      <div class="head">
        <div>
          <div class="kicker">{{ $t('home.where.kicker') }}</div>
          <h2>{{ $t('home.where.headline') }}</h2>
        </div>
        <p>{{ $t('home.where.lede') }}</p>
      </div>
      <div class="map-row">
        <div class="map">
          <div class="placeholder-label">
            {{ $t('home.where.mapPlaceholderTitle') }}
            <small>{{ $t('home.where.mapPlaceholderNote') }}</small>
          </div>
          <svg viewBox="0 0 500 320" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <g fill="#d9e8c8" stroke="#9bbe6f" stroke-width="0.6">
              <path d="M60,80 C100,55 150,50 200,65 C260,75 310,70 360,90 C400,110 420,150 405,180 C385,210 340,210 290,200 C240,190 200,210 160,200 C110,190 70,170 55,140 Z" />
              <path d="M180,140 C220,130 260,150 280,180 C300,210 295,250 270,270 C240,290 200,285 175,265 C150,245 145,200 165,175 Z" />
              <path d="M290,140 C330,130 380,150 405,180 C420,210 410,255 380,275 C345,290 310,275 295,255 C280,225 285,180 290,160 Z" />
            </g>
            <g>
              <circle cx="200" cy="195" r="9" fill="#448822" />
              <circle cx="200" cy="195" r="18" fill="#448822" fill-opacity="0.18" />
              <text x="212" y="200" fill="#1b2a14" font-family="TangoSans" font-size="12" font-weight="700">Liberia</text>
              <circle cx="232" cy="200" r="9" fill="#448822" />
              <text x="244" y="222" fill="#1b2a14" font-family="TangoSans" font-size="12" font-weight="700">Nigeria</text>
              <circle cx="290" cy="220" r="7" fill="#d96b1f" />
              <text x="302" y="225" fill="#7a3a0a" font-family="TangoSans" font-size="11">Kenya · team</text>
              <circle cx="244" cy="110" r="7" fill="#14140f" />
              <text x="256" y="115" fill="#14140f" font-family="TangoSans" font-size="11">Berlin · HQ</text>
              <circle cx="180" cy="215" r="4" fill="#5d5d52" />
              <circle cx="260" cy="180" r="4" fill="#5d5d52" />
              <circle cx="285" cy="160" r="4" fill="#5d5d52" />
              <circle cx="340" cy="170" r="4" fill="#5d5d52" />
              <circle cx="380" cy="200" r="4" fill="#5d5d52" />
              <circle cx="220" cy="120" r="4" fill="#5d5d52" />
            </g>
          </svg>
        </div>
        <div class="key">
          <h4>{{ $t('home.where.activeTitle') }}</h4>
          <div v-for="(c, i) in active" :key="`a-${i}`" class="ctry">
            <span class="name">{{ c.name }}</span>
            <span class="tag" :class="c.tone">{{ c.tag }}</span>
          </div>
          <h4 style="margin-top: 6px;">{{ $t('home.where.pastTitle') }}</h4>
          <div class="ctry">
            <span class="name">{{ $t('home.where.pastList') }}</span>
          </div>
          <div class="ctry">
            <span class="name">{{ $t('home.where.outsideList') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { tm, rt } = useI18n();
const active = computed(() =>
  tm('home.where.active').map(c => ({
    name: rt(c.name),
    tag: rt(c.tag),
    tone: c.tone ? rt(c.tone) : 'live'
  }))
);
</script>

<style lang="scss" scoped>
.e-where {
  @include full-bleed;
  padding: 96px 0;
  background: #fff;
  border-bottom: 1px solid $border-warm;
}
.inner { @include inner-container; }
.head {
  display: grid; grid-template-columns: 1fr 1fr; gap: 56px;
  align-items: end; margin-bottom: 40px;
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
  margin: 0; max-width: 18ch;
  text-wrap: balance;
  color: $near-black;
}
.head p { font-size: 16px; line-height: 1.55; color: $body-grey; max-width: 46ch; margin: 0; }
.map-row {
  display: grid; grid-template-columns: 1.4fr 1fr;
  gap: 36px;
  align-items: stretch;
}
.map {
  aspect-ratio: 16 / 10;
  background: $cream;
  border: 1px solid $border-warm;
  position: relative; overflow: hidden;
  svg { position: absolute; inset: 0; width: 100%; height: 100%; }
}
.placeholder-label {
  position: absolute; top: 16px; left: 18px;
  font-family: $tango;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8d8a7a;
  z-index: 2;
  max-width: 220px;
  small {
    display: block;
    font-family: ui-monospace, Menlo, monospace;
    font-size: 11px;
    color: #8d8a7a;
    margin-top: 4px;
    text-transform: none;
    letter-spacing: 0;
  }
}
.key {
  background: $cream;
  border: 1px solid $border-warm;
  padding: 24px;
  display: flex; flex-direction: column; gap: 12px;
  h4 {
    margin: 0;
    font-family: $tango;
    font-size: 13px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: $green-kicker;
  }
}
.ctry {
  display: flex; align-items: baseline; justify-content: space-between;
  gap: 14px;
  padding: 6px 0;
  border-bottom: 1px solid $border-light;
  font-size: 14px;
  &:last-child { border: 0; }
  .name { font-family: $tango; font-size: 16px; }
  .tag {
    font-family: $tango;
    font-size: 10.5px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: $green-kicker;
    background: #d9e8c8;
    padding: 2px 8px;
    border-radius: 1px;
    &.team { background: #fbe1cf; color: #a04a10; }
    &.hq { background: #e0ddcb; color: $near-black; }
  }
}

@media (max-width: $bp-lg) {
  .head { grid-template-columns: 1fr; }
  .map-row { grid-template-columns: 1fr; }
}
</style>
