<template>
  <section class="dd-features">
    <div class="inner">
      <div class="head">
        <div>
          <div class="kicker">{{ $t('developmentDashboard.features.kicker') }}</div>
          <h2>{{ $t('developmentDashboard.features.headline') }}</h2>
        </div>
        <div class="right">{{ $t('developmentDashboard.features.lede') }}</div>
      </div>
      <div class="grid">
        <div v-for="(f, i) in features" :key="i" class="f">
          <div class="num">{{ String(i + 1).padStart(2, '0') }} · {{ f.tag }}</div>
          <h4>{{ f.title }}</h4>
          <p>{{ f.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { tm, rt } = useI18n();
const features = computed(() =>
  tm('developmentDashboard.features.items').map(f => ({
    tag: rt(f.tag),
    title: rt(f.title),
    body: rt(f.body)
  }))
);
</script>

<style scoped>
.dd-features {
  padding: 96px 0;
  background: #f3efe2;
  border-bottom: 1px solid #d9d6cb;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  width: 100vw;
}
.inner { max-width: 1440px; margin: 0 auto; padding: 0 56px; }
.head {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 48px; align-items: end; margin-bottom: 44px;
}
.kicker {
  font-family: "TangoSans"; font-size: 12px;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: #2f6217;
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 14px;
}
.kicker::before { content: ""; width: 28px; height: 2px; background: #448822; }
.head h2 {
  font-family: "TangoSans"; font-weight: 700;
  font-size: clamp(32px, 3.8vw, 48px);
  letter-spacing: -0.02em; line-height: 1.02;
  margin: 0; max-width: 18ch; text-wrap: balance;
  color: #14140f;
}
.head .right {
  font-size: 16px; line-height: 1.55; color: #2a2a22; max-width: 46ch;
}
.grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: #d9d6cb;
  border: 1px solid #d9d6cb;
}
.f {
  background: #fff;
  padding: 28px 26px 26px;
  display: flex; flex-direction: column; gap: 12px;
  min-height: 200px;
}
.f .num {
  font-family: "TangoSans"; font-size: 11px;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: #2f6217;
}
.f h4 {
  font-family: "TangoSans"; font-weight: 700;
  font-size: 22px; letter-spacing: -0.012em;
  margin: 0; color: #14140f;
}
.f p {
  margin: 0; font-size: 14.5px; line-height: 1.5;
  color: #2a2a22;
}
@media (max-width: 992px) {
  .head { grid-template-columns: 1fr; }
  .grid { grid-template-columns: 1fr; }
  .inner { padding: 0 24px; }
}
</style>
