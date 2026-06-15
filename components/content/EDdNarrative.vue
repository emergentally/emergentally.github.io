<template>
  <section class="dd-narrative">
    <div class="grid">
      <div>
        <div class="kicker">{{ $t('developmentDashboard.narrative.kicker') }}</div>
        <h2>{{ $t('developmentDashboard.narrative.headline') }}</h2>
      </div>
      <div>
        <p v-for="(para, i) in paragraphs" :key="i" v-html="para"></p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { tm, rt } = useI18n();
// Each paragraph is a translation string; embed <b>…</b> directly in the
// translation values for emphasis pills (matches existing site convention).
const paragraphs = computed(() =>
  tm('developmentDashboard.narrative.paragraphs').map(p => rt(p))
);
</script>

<style scoped>
.dd-narrative {
  padding: 96px 56px;
  background: #fff;
  border-bottom: 1px solid #d9d6cb;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  width: 100vw;
}
.grid {
  max-width: 1440px; margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
}
.kicker {
  font-family: "TangoSans"; font-size: 12px;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: #2f6217;
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 18px;
}
.kicker::before { content: ""; width: 28px; height: 2px; background: #448822; }
h2 {
  font-family: "TangoSans"; font-weight: 700;
  font-size: clamp(36px, 4.4vw, 56px);
  letter-spacing: -0.022em; line-height: 1;
  margin: 0; max-width: 16ch;
  text-wrap: balance; color: #14140f;
}
p {
  margin: 0 0 18px;
  font-size: 18px; line-height: 1.55;
  color: #2a2a22; max-width: 56ch;
}
p:last-child { margin-bottom: 0; }
:deep(b) {
  background: #d9e8c8;
  color: #1b2a14;
  padding: 2px 6px;
  font-weight: 600;
}
@media (max-width: 992px) {
  .grid { grid-template-columns: 1fr; padding: 0 24px; }
}
</style>
