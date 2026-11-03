<template>
  <div v-if="open">
    <nuxt-link v-if="props.variant === 'banner'" :to="localePath(currentJob.path)" class="e-hiring-banner">
      <span class="inner">
        <span class="label">{{ $t('jobs.hiring') }}</span>
        <span class="text">{{ $t('jobs.roleSummary', { date: closingDate }) }}</span>
        <span class="e-btn primary">{{ $t('jobs.viewRole') }} →</span>
      </span>
    </nuxt-link>
    <section v-else class="e-hiring-section">
      <h2>{{ $t('jobs.hiring') }}</h2>
      <p>{{ $t('jobs.intro') }}</p>
      <nuxt-link :to="localePath(currentJob.path)" class="e-btn primary">
        {{ $t('jobs.roleSummary', { date: closingDate }) }} →
      </nuxt-link>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'section'
  }
});
const open = useJobOpen();
const localePath = useLocalePath();
const { locale } = useI18n();
const closingDate = computed(() =>
  new Date(`${currentJob.closingDate}T12:00:00Z`).toLocaleDateString(
    locale.value === 'fr' ? 'fr-FR' : 'en-GB',
    { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }
  ).replace(',', '')
);
</script>

<style lang="scss" scoped>
.e-btn {
  @include btn-base(sm);
  &.primary { background: $green-bright; color: #fff; }
  &.primary:hover { background: $green-kicker; }
}
.e-hiring-banner {
  display: block;
  background: $cream;
  border-bottom: 1px solid $border-warm;
  padding: 14px $pad-x;
  text-decoration: none;
  &:hover .e-btn { background: $green-kicker; }
  .inner {
    max-width: $inner-max;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 8px 24px;
    flex-wrap: wrap;
  }
  .label {
    @include kicker-line;
  }
  .text {
    font-size: 17px;
    color: $body-grey;
    flex: 1 1 320px;
  }
  @media (max-width: $bp-md) {
    padding: 12px 16px;
    .inner {
      display: block;
    }
    .label {
      font-size: 11px;
      margin-bottom: 4px;
      &::before { width: 18px; }
    }
    .text {
      font-size: 15px;
      line-height: 1.4;
    }
    // On phones the button becomes a plain text link after the role line
    .e-btn {
      display: inline;
      padding: 0;
      margin-left: 4px;
      font-size: 15px;
      background: none;
      color: $green-kicker;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    &:hover .e-btn { background: none; }
  }
}
.e-hiring-section {
  margin: 40px 0;
  padding: 28px 32px;
  background: $cream;
  border-left: 4px solid $green-mid;
  h2 { margin-top: 0; }
}
</style>
