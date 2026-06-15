<template>
  <section class="dd-showcase">
    <div class="twin">
      <a
        v-for="(s, i) in showcases"
        :key="i"
        :href="s.url"
        class="frame"
      >
        <div class="head">
          <div>
            <div class="ctry">{{ s.country }}</div>
            <div class="title">{{ s.title }}</div>
          </div>
          <span class="url">{{ s.urlLabel }}</span>
        </div>
        <img :src="s.image" :alt="s.title" />
        <div class="meta">
          <span>{{ s.subtitle }}</span>
          <span>{{ s.status }}</span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
const { tm, rt } = useI18n();
const showcases = computed(() =>
  tm('developmentDashboard.showcase.items').map(s => ({
    country: rt(s.country),
    title: rt(s.title),
    url: rt(s.url),
    urlLabel: rt(s.urlLabel),
    image: rt(s.image),
    subtitle: rt(s.subtitle),
    status: rt(s.status)
  }))
);
</script>

<style scoped>
.dd-showcase {
  padding: 80px 56px;
  background: #f3efe2;
  border-bottom: 1px solid #d9d6cb;
  margin-top: -40px;
  position: relative;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  width: 100vw;
}
.twin {
  max-width: 1440px; margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}
.frame {
  background: #fff;
  border: 1px solid #d9d6cb;
  border-radius: 2px;
  padding: 16px;
  box-shadow: 0 30px 60px -30px rgba(20,20,15,0.25);
  text-decoration: none;
  color: inherit;
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.frame:hover {
  transform: translateY(-4px);
  box-shadow: 0 40px 70px -25px rgba(20,20,15,0.3);
}
.head {
  display: flex; justify-content: space-between; align-items: baseline;
  padding: 4px 4px 14px;
  border-bottom: 1px solid #e7e4d8;
  margin-bottom: 14px;
}
.head .ctry {
  font-family: "TangoSans"; font-size: 11px;
  letter-spacing: 0.16em; text-transform: uppercase;
  color: #2f6217;
  display: flex; align-items: center; gap: 8px;
}
.head .ctry::before {
  content: ""; width: 8px; height: 8px; border-radius: 50%;
  background: #448822;
}
.head .title {
  font-family: "TangoSans"; font-size: 18px;
  letter-spacing: -0.005em; margin: 4px 0 0;
  color: #14140f;
}
.head .url {
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11px; color: #5d5d52;
}
.frame img { width: 100%; border: 1px solid #e7e4d8; display: block; }
.meta {
  display: flex; justify-content: space-between; align-items: baseline;
  padding: 12px 4px 0;
  font-family: "TangoSans"; font-size: 11px;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: #5d5d52;
}
@media (max-width: 992px) {
  .twin { grid-template-columns: 1fr; padding: 0 24px; }
}
</style>
