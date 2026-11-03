<template>
  <section class="e-ticker">
    <div class="inner">
      <div class="label">{{ $t('home.ticker.label') }}</div>
      <div class="items">
        <template v-for="(p, i) in items" :key="i">
          <span><strong>{{ p.name }}</strong> · {{ p.role }}</span>
          <template v-if="i < items.length - 1"><span class="sep">●</span>{{ ' ' }}</template>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
const { tm, rt } = useI18n();
const items = computed(() =>
  tm('home.ticker.partners').map(p => ({ name: rt(p.name), role: rt(p.role) }))
);
</script>

<style lang="scss" scoped>
.e-ticker {
  @include full-bleed;
  background: $green-kicker;
  border-bottom: 4px solid $green-mid;
  padding: 18px 0;
}
.inner {
  max-width: $inner-max;
  margin: 0 auto;
  padding: 0 $pad-x;
  display: flex; align-items: center; gap: 14px;
  font-family: $tango;
  font-size: 14px;
  // letter-spacing: 0.06em;
  color: #fff;
  flex-wrap: wrap;
}
.label {
  font-family: $tango;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(#fff, 0.85);
  padding-right: 18px;
  border-right: 1px solid rgba(#fff, 0.3);
}
// Items flow as running text, so they wrap mid-line rather than one per line
.items {
  flex: 1;
  font-size: 14px;
  line-height: 1.9;
  strong { font-family: $tango; font-weight: 700; }
}
.sep { color: rgba(#fff, 0.45); font-size: 0.7em; margin: 0 6px 0 12px; vertical-align: 0.15em; }

@media (max-width: $bp-md) {
  .inner { padding: 0 $pad-x-sm; flex-direction: column; align-items: flex-start; gap: 12px; }
  .label { border-right: 0; padding-right: 0; }
  .items { font-size: 13px; }
}
</style>
