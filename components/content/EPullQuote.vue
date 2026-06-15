<template>
  <section class="e-pull-quote" :style="{ backgroundImage: bg }">
    <div class="quote">
      <div class="mark">“</div>
      <blockquote>{{ $t(`${namespace}.text`) }}</blockquote>
      <cite>{{ $t(`${namespace}.attribution`) }}</cite>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  // i18n key path containing { text, attribution }. Defaults to the home page
  // pull-quote namespace; pass e.g. "developmentDashboard.pullQuote" elsewhere.
  namespace: { type: String, default: 'home.pullQuote' },
  // Background image (absolute path under /public). Pass "none" to render a
  // solid dark block without an image.
  image: { type: String, default: '/iati-accra-statement.png' }
});
const bg = computed(() =>
  props.image && props.image !== 'none' ? `url(${props.image})` : 'none'
);
</script>

<style scoped>
.e-pull-quote {
  min-height: 360px;
  background-size: cover;
  background-position: center;
  background-color: #1b2a14;
  position: relative;
  overflow: hidden;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  width: 100vw;
  display: flex;
  align-items: center;
}
.e-pull-quote::after {
  content: "";
  position: absolute; inset: 0;
  background:
    linear-gradient(90deg, rgba(20,20,15,0.85) 0%, rgba(20,20,15,0.3) 60%, transparent 100%),
    radial-gradient(900px 600px at 10% 50%, rgba(153,204,102,0.18), transparent 60%);
}
.quote {
  position: relative;
  z-index: 1;
  max-width: 880px;
  padding: 64px max(56px, calc(50vw - 720px + 56px));
  color: #fff;
}
.mark {
  font-family: "TangoSans"; font-size: 96px;
  color: #99cc66;
  line-height: 0.4;
  margin-bottom: 8px;
  background: none;
  padding: 0px;
}
blockquote {
  margin: 0;
  font-family: "TangoSans";
  font-weight: 700;
  font-size: clamp(22px, 3vw, 44px);
  line-height: 1.15;
  letter-spacing: -0.014em;
  text-wrap: balance;
  border-left: 0;
  padding-left: 0;
  color: #fff;
}
cite {
  display: block;
  margin-top: 20px;
  font-style: normal;
  font-size: 14px;
  color: #b6d496;
  letter-spacing: 0.04em;
}
@media (max-width: 768px) {
  .quote { padding: 48px 24px; }
}
</style>
