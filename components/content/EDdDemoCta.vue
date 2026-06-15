<template>
  <section class="dd-demo">
    <div class="inner">
      <div>
        <h2>
          <i18n-t keypath="developmentDashboard.demoCta.headline" tag="span">
            <template #emphasis>
              <em>{{ $t('developmentDashboard.demoCta.headlineEmphasis') }}</em>
            </template>
          </i18n-t>
        </h2>
        <p>{{ $t('developmentDashboard.demoCta.body') }}</p>
        <div class="actions">
          <nuxt-link :to="localePath('/get-in-touch/')" class="dd-btn primary">
            {{ $t('developmentDashboard.demoCta.primary') }} →
          </nuxt-link>
          <a :href="`mailto:${email}`" class="dd-btn ghost">
            {{ $t('developmentDashboard.demoCta.secondary') }}
          </a>
        </div>
      </div>
      <div class="checks">
        <h4>{{ $t('developmentDashboard.demoCta.checksTitle') }}</h4>
        <ul>
          <li v-for="(item, i) in checks" :key="i">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const localePath = useLocalePath();
defineProps({
  email: { type: String, default: 'mark@emergentally.com' }
});
const { tm, rt } = useI18n();
const checks = computed(() =>
  tm('developmentDashboard.demoCta.checks').map(c => rt(c))
);
</script>

<style scoped>
.dd-demo {
  background: #448822;
  color: #fff;
  padding: 96px 0;
  position: relative; overflow: hidden;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  width: 100vw;
}
.dd-demo::before {
  content: ""; position: absolute; inset: 0;
  background:
    radial-gradient(800px 400px at 100% -30%, rgba(255,255,255,0.15), transparent 60%),
    repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 24px);
}
.inner {
  position: relative; z-index: 1;
  max-width: 1440px; margin: 0 auto; padding: 0 56px;
  display: grid; grid-template-columns: 1.3fr 1fr;
  gap: 48px; align-items: center;
}
h2 {
  font-family: "TangoSans"; font-weight: 700;
  font-size: clamp(40px, 5vw, 64px);
  letter-spacing: -0.025em; line-height: 1;
  margin: 0 0 18px;
  max-width: 18ch; text-wrap: balance;
  color: #fff;
}
:deep(em) {
  font-style: normal; background: rgba(0,0,0,0.25); padding: 0 8px;
}
p {
  margin: 0 0 28px;
  font-size: 18px; color: #e2eed1; line-height: 1.5;
  max-width: 46ch;
}
.actions { display: flex; gap: 14px; flex-wrap: wrap; }
.dd-btn {
  display: inline-flex; align-items: center; gap: 10px;
  text-decoration: none;
  font-size: 15px; font-weight: 500;
  padding: 16px 24px; border-radius: 2px;
  border: 1.5px solid transparent;
  font-family: inherit;
}
.dd-btn.primary { background: #fff; color: #14140f; }
.dd-btn.ghost { color: #fff; border-color: rgba(255,255,255,0.6); }
.checks {
  background: rgba(0,0,0,0.18);
  border: 1px solid rgba(255,255,255,0.15);
  padding: 26px; border-radius: 2px;
}
.checks h4 {
  margin: 0 0 14px;
  font-family: "TangoSans"; font-size: 18px; color: #fff;
}
.checks ul {
  margin: 0; padding: 0; list-style: none;
  display: flex; flex-direction: column; gap: 10px;
  font-size: 14px; color: #e2eed1;
}
.checks ul li {
  padding-left: 24px; position: relative; line-height: 1.45;
}
.checks ul li::before {
  content: "✓"; position: absolute; left: 0; top: 0;
  color: #fff; font-weight: 700;
}
@media (max-width: 992px) {
  .inner { grid-template-columns: 1fr; padding: 0 24px; }
}
</style>
