<template>
  <div>
    <Head>
      <Title>{{config.public.title}}</Title>
      <Meta name="twitter:title" :content="config.public.title" />
      <Meta name="og:title" :content="config.public.title" />
      <Meta name="twitter:image" :content="config.public.twitterImage" />
      <Meta name="og:image" :content="config.public.twitterImage" />
      <Meta name="twitter:image:alt" :content="config.public.twitterImageAlt" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="description" :content="config.public.description" />
      <Meta name="twitter:description" :content="config.public.description" />
    </Head>
    <b-container fluid class="p-0">
      <div class="header">
        <b-container class="header-container" style="vertical-align: bottom;">
          <div class="rounded-3 jumbotron">
            <b-container fluid class="py-5">
              <h1 class="display-5 fw-bold">Emergentally.</h1>
              <p class="lead">Data-driven development for emerging economies</p>
            </b-container>
          </div>
        </b-container>
      </div>
      <b-navbar toggleable="lg"  v-b-color-mode="'dark'" variant="dark" class="primary-navbar">
          <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item
                :to="localePath($t('menuItems.whatWeDo.value'))"
                class="ml-lg-4 mr-lg-4">{{ $t('menuItems.whatWeDo.text') }}</b-nav-item>
              <b-nav-item
                :to="localePath($t('menuItems.whoWeAre.value'))"
                class="ml-lg-4 mr-lg-4">{{ $t('menuItems.whoWeAre.text') }}</b-nav-item>
              <b-nav-item
                :to="localePath($t('menuItems.getInTouch.value'))"
                class="ml-lg-4 mr-lg-4">{{ $t('menuItems.getInTouch.text') }}</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ms-auto mb-2 mb-lg-0">
              <b-nav-item-dropdown :text="$t('selectLanguage')" right id="language">
                <b-dropdown-item
                  v-for="locale in availableLocales"
                  v-bind:key="locale.code"
                  :to="switchLocalePath(locale.code)"
                  :active="$i18n.locale == locale.code">
                  {{ locale.name }}
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
          </b-container>
      </b-navbar>
      <b-container class="p-5 page-body">
        <slot />
      </b-container>
    </b-container>
  </div>
</template>
<style>
hr {
  margin-top: 40px;
}
img {
  box-shadow: 4px 4px 10px #000000;
  margin: 0px 10px 10px 10px;
}
.card-deck img {
  box-shadow: initial;
  margin: initial;
}

@media (max-width: 1200px) {
  img {
    width: 200px;
  }
}
.header-container {
  width: 100%;
}
@font-face {
  font-family: tangoSans;
  src: url(/tangosans/TangoSans.ttf);
}
.primary-navbar {
  border-bottom: 1px solid #dddddd;
}
.primary-navbar.bg-dark {
  background-color: #000000 !important;
}
.primary-navbar.bg-dark a, .primary-navbar.bg-dark button {
  color: #ffffff !important;
}
.w-33 {
  width: 33%;
}
.jumbotron {
  background: none; /* background:  url('~/static/noun-data-5139476.svg') no-repeat right top fixed; */
  -webkit-background-size: 600px 600px;
  -moz-background-size: 600px 600px;
  -o-background-size: 600px 600px;
  background-size: 600px 600px;
  margin-bottom: 0px;
}
.jumbotron h1 {
  font-family: tangoSans;
  color:  #ffffff;
  margin-top: 20px;
  text-shadow: 0px 0px 20px #444444;
  font-size: 7em;
  letter-spacing: -1px;
}
@media (max-width: 1200px) {
  .jumbotron h1 {
    font-size: 3em;
    letter-spacing: -1px;
  }
  .jumbotron .lead {
    font-size: 1.2em;
  }
}
h1 {
  font-family: tangoSans;
  letter-spacing: -1px;
}
.jumbotron h1::first-letter {
  font-size: 1em;
  text-shadow: 0px 0px 20px #222222;
}
.jumbotron .lead {
  font-family:  tangoSans;
  color: #ffffff;
  text-shadow: 0px 0px 1px #ffffff;
  font-size: 1.7em;
  background: #000000;
  padding: 5px 5px 5px 10px;
  margin-left: -5px;


  border-right: .15em solid orange; /* The typwriter cursor */
  animation:
    blink-caret .75s step-end infinite;

}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: white; }
}
.page-body {
  margin-bottom: 20px;
}
.page-body h1 {
  font-family: tangoSans;
  font-size: 4em;
}
.page-body h2 {
  font-family: tangoSans;
}
.page-body h2 a {
  color: #000000;
  text-decoration: none;
}
.page-body p {
  font-size: 1.25rem;
  font-weight: 300;
}
@media (max-width: 1200px) {
  .page-body h1 {
    font-size: 3em;
  }
  .page-body h2 {
    font-size: 2em;
  }
}
.page-body b {
  background-color: #448822;
  color: #ffffff;
  padding: 2px 4px 2px 4px;
}
.header {
  background: #448822;
  /*
  background: url('~/static/20220313_104415.jpg') no-repeat center bottom fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  */
  background: linear-gradient(45deg,#448822,#666) repeat scroll 0 0 transparent;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#448822",endColorstr="#666666",GradientType=1);

  box-shadow: inset 0 3px 7px rgb(0 0 0 / 20%), inset 0 -3px 7px rgb(0 0 0 / 20%);
  margin: 0px;
  color: #fff;
}
.alert-success {
  color: #ffffff;
  background-color: #448822;
}

hr {
  margin-top: 40px;
}
img {
  box-shadow: 4px 4px 10px #000000;
  margin: 0px 10px 10px 10px;
}

@media (max-width: 1200px) {
  img {
    width: 200px;
  }
}
.header-container {
  width: 100%;
}
@font-face {
  font-family: tangoSans;
  src: url(/tangosans/TangoSans.ttf);
}
.primary-navbar {
  border-bottom: 1px solid #dddddd;
}
.w-33 {
  width: 33%;
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: white; }
}
.page-body {
  margin-bottom: 20px;
}
.page-body h1 {
  font-family: tangoSans;
  font-size: 4em;
}
.page-body h2 {
  font-family: tangoSans;
}
.page-body p {
  font-size: 1.25rem;
  font-weight: 300;
}
@media (max-width: 1200px) {
  .page-body h1 {
    font-size: 3em;
  }
  .page-body h2 {
    font-size: 2em;
  }
}
.page-body b {
  background-color: #448822;
  color: #ffffff;
  padding: 2px 4px 2px 4px;
}
.header {
  background: #448822;
  /*
  background: url('~/static/20220313_104415.jpg') no-repeat center bottom fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  */
  background: linear-gradient(45deg,#448822,#666) repeat scroll 0 0 transparent;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#448822",endColorstr="#666666",GradientType=1);

  box-shadow: inset 0 3px 7px rgb(0 0 0 / 20%), inset 0 -3px 7px rgb(0 0 0 / 20%);
  margin: 0px;
  color: #fff;
}
</style>
<script setup>
const config = useRuntimeConfig();
const { locale, locales } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>
