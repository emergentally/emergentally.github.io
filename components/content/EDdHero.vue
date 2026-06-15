<template>
  <section class="dd-hero">
    <div class="crumbs">
      <nuxt-link :to="localePath('/')">{{ $t('menuItems.whatWeDo.text') }}</nuxt-link>
      <span class="sep">/</span>
      {{ $t('developmentDashboard.hero.crumb') }}
    </div>
    <div class="layout">
      <div>
        <div class="kicker"><span class="pip"></span>{{ $t('developmentDashboard.hero.kicker') }}</div>
        <h1>{{ $t('developmentDashboard.hero.headline') }}</h1>
        <p class="lede">{{ $t('developmentDashboard.hero.lede') }}</p>
        <div class="ctas">
          <nuxt-link :to="localePath('/get-in-touch/')" class="dd-btn primary">
            {{ $t('developmentDashboard.hero.ctaPrimary') }} →
          </nuxt-link>
          <a href="https://liberiaprojects.org" class="dd-btn ghost">
            {{ $t('developmentDashboard.hero.ctaSecondary') }}
          </a>
        </div>
      </div>
      <div class="e-badges">
        <div class="e-badge">
          <div class="label">{{ $t('developmentDashboard.hero.badgeWorldFirstLabel') }}</div>
          <div class="big">1<small>st</small></div>
          <p>{{ $t('developmentDashboard.hero.badgeWorldFirstBody') }}</p>
        </div>
        <div class="e-badge users">
          <div class="flags">
            <span class="flag lr" title="Liberia"></span>
            <span class="flag ng" title="Nigeria"></span>
          </div>
          <h4>{{ $t('developmentDashboard.hero.badgeUsersTitle') }}</h4>
          <p>{{ $t('developmentDashboard.hero.badgeUsersBody') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style scoped>
.dd-hero {
  background: #14140f;
  color: #f3efe2;
  padding: 80px 56px 96px;
  position: relative;
  overflow: hidden;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  width: 100vw;
}
.dd-hero::before {
  content: "";
  position: absolute; inset: 0;
  background: radial-gradient(800px 500px at 85% 0%, rgba(68,136,34,0.25), transparent 60%);
  pointer-events: none;
}
.crumbs {
  position: relative;
  font-family: "TangoSans"; font-size: 11px;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: #99cc66;
  margin-bottom: 32px;
  max-width: 1440px; margin-left: auto; margin-right: auto;
}
.crumbs a { color: #6e6c5e; text-decoration: none; }
.crumbs .sep { color: #3a3a30; margin: 0 10px; }
.layout {
  position: relative;
  max-width: 1440px; margin: 0 auto;
  display: grid; grid-template-columns: 1.4fr 1fr;
  gap: 56px; align-items: end;
}
.kicker {
  font-family: "TangoSans"; font-size: 13px;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: #99cc66;
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 22px;
}
.pip {
  width: 8px; height: 8px; background: #99cc66; border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(153,204,102,0.2);
}
h1 {
  font-family: "TangoSans"; font-weight: 700;
  font-size: clamp(48px, 8vw, 108px) !important;
  line-height: 0.92; letter-spacing: -0.03em;
  margin: 0 0 24px; color: #fff;
  max-width: 14ch; text-wrap: balance;
  text-shadow: 0 4px 24px rgba(0,0,0,0.3);
}
.lede {
  font-size: 22px; line-height: 1.45;
  color: #e2ddca; max-width: 48ch;
  margin: 0 0 32px;
}
.ctas { display: flex; gap: 14px; flex-wrap: wrap; }
.dd-btn {
  display: inline-flex; align-items: center; gap: 10px;
  text-decoration: none;
  font-size: 15px; font-weight: 500;
  padding: 16px 24px; border-radius: 2px;
  border: 1.5px solid transparent;
  font-family: inherit;
}
.dd-btn.primary { background: #99cc66; color: #14140f; }
.dd-btn.ghost { color: #fff; border-color: rgba(255,255,255,0.5); }
.e-badges { display: flex; flex-direction: column; gap: 14px; }
.e-badge {
  background: #1b2a14;
  border: 1px solid rgba(153,204,102,0.2);
  color: #fff;
  padding: 22px 24px;
  border-radius: 2px;
}
.e-badge .label {
  font-family: "TangoSans"; font-size: 11px;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: #99cc66; margin-bottom: 8px;
}
.e-badge .big {
  font-family: "TangoSans"; font-size: 44px;
  line-height: 1; letter-spacing: -0.02em;
  color: #fff; margin-bottom: 8px;
}
.e-badge .big small {
  font-size: 22px; color: #99cc66; margin-left: 2px;
}
.e-badge p { margin: 0; font-size: 13.5px; color: #d2cfbf; line-height: 1.5; }
.e-badge.users { background: rgba(255,255,255,0.04); }
.e-badge.users .flags { display: flex; gap: 12px; align-items: center; margin-bottom: 10px; }
.e-badge.users .flag {
  width: 36px; height: 24px; border-radius: 2px;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 1px 0 rgba(0,0,0,0.3);
}
.e-badge.users .flag.lr {
  background: url('/liberia-512.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
.e-badge.users .flag.ng {
  background: url('/nigeria-512.png');
  background-size: 130%;
  background-position: center;
  background-repeat: no-repeat;
}
.e-badge.users h4 {
  font-family: "TangoSans"; font-size: 15px;
  margin: 0 0 4px; color: #fff;
}

@media (max-width: 992px) {
  .layout { grid-template-columns: 1fr; padding: 0 24px; }
  .crumbs, .layout { padding: 0 24px; }
}
</style>
