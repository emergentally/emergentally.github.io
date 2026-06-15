<template>
  <section class="dd-pillars">
    <div class="inner">
      <div class="section-head">
        <div>
          <div class="kicker">{{ $t('developmentDashboard.pillars.kicker') }}</div>
          <h2>{{ $t('developmentDashboard.pillars.headline') }}</h2>
        </div>
        <div class="right">{{ $t('developmentDashboard.pillars.lede') }}</div>
      </div>

      <div
        v-for="(p, i) in pillars"
        :key="i"
        class="pillar"
        :class="{ reverse: i % 2 === 1 }"
      >
        <div class="text">
          <div class="n">{{ p.kicker }}</div>
          <h3>{{ p.title }}</h3>
          <p>{{ p.body }}</p>
          <span v-if="p.signal" class="signal">
            <span class="pip"></span>{{ p.signal }}
          </span>
        </div>
        <div class="shot" v-if="p.image">
          <img :src="p.image" :alt="p.title" />
          <div class="cap">{{ p.caption }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { tm, rt } = useI18n();
const pillars = computed(() =>
  tm('developmentDashboard.pillars.items').map(p => ({
    kicker: rt(p.kicker),
    title: rt(p.title),
    body: rt(p.body),
    signal: p.signal ? rt(p.signal) : '',
    image: p.image ? rt(p.image) : null,
    caption: p.caption ? rt(p.caption) : null
  }))
);
</script>

<style scoped>
.dd-pillars {
  background: #f3efe2;
  padding: 96px 0 64px;
  border-bottom: 1px solid #d9d6cb;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  width: 100vw;
}
.inner { max-width: 1440px; margin: 0 auto; padding: 0 56px; }
.section-head {
  margin-bottom: 64px;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 48px; align-items: end;
}
.kicker {
  font-family: "TangoSans"; font-size: 12px;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: #2f6217;
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 14px;
}
.kicker::before { content: ""; width: 28px; height: 2px; background: #448822; }
.section-head h2 {
  margin: 0;
  font-family: "TangoSans"; font-weight: 700;
  font-size: clamp(36px, 4.4vw, 56px);
  letter-spacing: -0.022em; line-height: 1;
  max-width: 18ch; text-wrap: balance;
  color: #14140f;
}
.section-head .right {
  font-size: 16px; line-height: 1.55;
  color: #2a2a22; max-width: 48ch;
}
.pillar {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 56px; align-items: center;
  margin-bottom: 64px;
}
.pillar.reverse > .text { order: 2; }
.pillar:last-child { margin-bottom: 0; }
.text .n {
  font-family: "TangoSans"; font-size: 12px;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: #2f6217; margin-bottom: 12px;
}
.text h3 {
  font-family: "TangoSans"; font-weight: 700;
  font-size: clamp(28px, 3.2vw, 40px);
  letter-spacing: -0.02em; line-height: 1.05;
  margin: 0 0 16px;
  max-width: 16ch; text-wrap: balance;
  color: #14140f;
}
.text p {
  margin: 0; font-size: 17px; line-height: 1.55;
  color: #2a2a22; max-width: 48ch;
}
.signal {
  margin-top: 18px;
  display: inline-flex; align-items: center; gap: 10px;
  background: #1b2a14;
  color: #99cc66;
  font-family: "TangoSans"; font-size: 11.5px;
  letter-spacing: 0.16em; text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 2px;
}
.signal .pip {
  width: 6px; height: 6px; background: #99cc66; border-radius: 50%;
}
.shot {
  background: #fff;
  border: 1px solid #d9d6cb;
  padding: 14px;
  border-radius: 2px;
  box-shadow: 0 30px 60px -30px rgba(20,20,15,0.18);
}
.shot img { width: 100%; border: 1px solid #e7e4d8; display: block; }
.shot .cap {
  font-family: "TangoSans"; font-size: 11px;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: #5d5d52;
  padding: 10px 4px 2px;
}
@media (max-width: 992px) {
  .section-head { grid-template-columns: 1fr; }
  .pillar { grid-template-columns: 1fr; }
  .pillar.reverse > .text { order: initial; }
  .inner { padding: 0 24px; }
}
</style>
