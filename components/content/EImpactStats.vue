<template>
  <section ref="section" class="e-stats">
    <div class="inner">
      <div class="first">
        <div class="kicker">{{ $t('home.stats.kicker') }}</div>
        <h3>{{ $t('home.stats.headline') }}</h3>
        <p>{{ $t('home.stats.lede') }}</p>
      </div>
      <div v-for="(s, i) in stats" :key="i" class="cell">
        <div class="n">
          <span class="visually-hidden">{{ s.value }}{{ s.unit }}</span>
          <span aria-hidden="true">{{ shown[i] ?? s.value }}<small v-if="s.unit">{{ s.unit }}</small></span>
        </div>
        <div class="label">
          {{ s.label }}
          <small v-if="s.note">{{ s.note }}</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { tm, rt } = useI18n();
const stats = computed(() =>
  tm('home.stats.items').map(s => ({
    value: rt(s.value),
    unit: s.unit ? rt(s.unit) : '',
    label: rt(s.label),
    note: s.note ? rt(s.note) : ''
  }))
);

// Count each figure up from 0 the first time the stats scroll into view.
// Screen readers get the final figure from a visually hidden copy.
// The server-rendered HTML always has the final figures, so without
// JavaScript (or with reduced motion) nothing changes.
const section = ref(null);
const shown = ref([]);
let observer;
const DURATION = 1200;

// "75.9" or "75,9" -> formatter that keeps the same decimal places and mark
function counter(value) {
  const match = value.match(/^(\d+)(?:([.,])(\d+))?$/);
  if (!match) return null;
  const [, , mark = '.', decimals = ''] = match;
  const target = parseFloat(value.replace(',', '.'));
  return t => (target * t).toFixed(decimals.length).replace('.', mark);
}

function animate() {
  const counters = stats.value.map(s => counter(s.value));
  const start = performance.now();
  const step = now => {
    const progress = Math.min((now - start) / DURATION, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    shown.value = counters.map((c, i) => c ? c(eased) : stats.value[i].value);
    if (progress < 1) requestAnimationFrame(step);
    else shown.value = [];
  };
  requestAnimationFrame(step);
}

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window) || !section.value) return;
  shown.value = stats.value.map(s => counter(s.value)?.(0) ?? s.value);
  observer = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) {
      observer.disconnect();
      animate();
    }
  }, { threshold: 0.4 });
  observer.observe(section.value);
});
onBeforeUnmount(() => observer?.disconnect());
</script>

<style lang="scss" scoped>
.e-stats {
  @include full-bleed;
  background: $near-black;
  color: $cream;
  padding: 72px 0;
}
.inner {
  max-width: $inner-max;
  margin: 0 auto;
  padding: 0 $pad-x;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 0;
}
.first {
  padding-right: 32px;
  .kicker {
    font-family: $tango;
    font-size: 12px;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: $green-bright;
    margin-bottom: 14px;
  }
  h3 {
    font-family: $tango;
    font-weight: 700;
    font-size: 36px;
    letter-spacing: -0.018em;
    line-height: 1.1;
    margin: 0 0 14px;
    color: #fff;
  }
  p { margin: 0; font-size: 14px; color: $grey-muted; line-height: 1.55; }
}
.cell {
  padding: 0 32px;
  border-left: 1px solid #2a2a22;
  .n {
    font-family: $tango;
    font-size: 88px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: #fff;
    font-variant-numeric: tabular-nums;
    small { font-size: 30px; color: $green-bright; margin-left: 2px; }
  }
  .label {
    margin-top: 14px;
    font-size: 13.5px;
    color: $grey-muted;
    line-height: 1.5;
    max-width: 24ch;
    small {
      display: block;
      font-family: $tango;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #6e6c5e;
      margin-top: 6px;
    }
  }
}

@media (max-width: $bp-lg) {
  .inner { grid-template-columns: 1fr 1fr; gap: 24px; padding: 0 $pad-x-sm; }
  .first { grid-column: 1 / -1; padding-right: 0; padding-bottom: 16px; border-bottom: 1px solid #2a2a22; }
  .cell {
    padding: 0; border-left: 0;
    .n { font-size: 56px; small { font-size: 20px; } }
  }
}
</style>
