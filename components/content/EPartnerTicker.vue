<template>
  <section class="e-ticker">
    <div class="inner">
      <div class="label">{{ $t('home.ticker.label') }}</div>
      <div class="items">
        <template v-for="(p, i) in items" :key="i">
          <span><strong>{{ p.name }}</strong> · {{ p.role }}</span>
          <span v-if="i < items.length - 1" class="sep">●</span>
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
  background: $green-bright;
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
  color: $forest;
  flex-wrap: wrap;
}
.label {
  font-family: $tango;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: $forest;
  padding-right: 18px;
  border-right: 1px solid rgba($forest, 0.3);
}
.items {
  display: flex; gap: 12px; /* gap: 28px; */ align-items: center;
  flex: 1; flex-wrap: wrap;
  font-size: 14px;
  strong { font-family: $tango; font-weight: 700; }
}
.sep { color: rgba($forest, 0.4); }

@media (max-width: $bp-md) {
  .inner { padding: 0 $pad-x-sm; flex-direction: column; align-items: flex-start; gap: 12px; }
  .label { border-right: 0; padding-right: 0; }
  .items { gap: 14px; font-size: 13px; }
}
</style>
