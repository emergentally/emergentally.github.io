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
      <div :class="pageClass">
        <b-container class="header-container" style="vertical-align: bottom;">
          <div class="rounded-3 jumbotron">
            <b-container fluid>
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
                class="me-lg-3 fs-5"><font-awesome :icon="['fas', 'house']" class="me-2" /> {{ $t('menuItems.whatWeDo.text') }}</b-nav-item>
              <b-nav-item
                :to="localePath($t('menuItems.whoWeAre.value'))"
                class="me-lg-3 fs-5">{{ $t('menuItems.whoWeAre.text') }}</b-nav-item>
              <b-nav-item
                :to="localePath($t('menuItems.getInTouch.value'))"
                class="me-lg-3 fs-5">{{ $t('menuItems.getInTouch.text') }}</b-nav-item>
              <b-nav-item
                :to="localePath($t('menuItems.blog.value'))"
                class="me-lg-3 fs-5">{{ $t('menuItems.blog.text') }}</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ms-auto mb-2 mb-lg-0 fs-5">
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
    <b-container fluid class="footer text-bg-dark">
      <b-container class="pt-5 pb-5 footer">
        <footer>
          <b-row>
            <b-col>Copyright &copy; Emergentally 2022-2024. All rights reserved.</b-col>
            <b-col class="text-end fs-4">
              <nuxt-link href="https://mastodon.social/@emergentally" class="me-3"><font-awesome :icon="['fab', 'mastodon']" /></nuxt-link>
              <nuxt-link href="https://bsky.app/profile/emergentally.bsky.social" class="me-3"><font-awesome :icon="['fab', 'bluesky']" /></nuxt-link>
              <nuxt-link href="https://x.com/emergentally" class="me-3"><font-awesome :icon="['fab', 'twitter']" /></nuxt-link>
            </b-col>
          </b-row>
        </footer>
      </b-container>
    </b-container>
  </div>
</template>
<style>
a.nav-link {
  border-bottom: 2px solid transparent;
}
a.nav-link:hover {
  border-bottom: 2px solid grey;
}
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
.header {
  transition: all 1s;
}
.jumbotron {
  background: none; /* background:  url('~/static/noun-data-5139476.svg') no-repeat right top fixed; */
  -webkit-background-size: 600px 600px;
  -moz-background-size: 600px 600px;
  -o-background-size: 600px 600px;
  background-size: 600px 600px;
  margin-bottom: 0px;
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  transition: all 1s;
}
.jumbotron .lead {
  visibility: hidden;
  opacity: 0;
  height: 0px;
  padding: 0px;
  margin: 0px;
  font-family:  tangoSans;
  color: #ffffff;
  text-shadow: 0px 0px 1px #ffffff;
  font-size: 1.7em;
  background: #000000;
  border-right: .15em solid orange; /* The typwriter cursor */
  animation:
    blink-caret .75s step-end infinite;
  transition: visibility 0s, opacity 0.5s linear;
}
.header-home .jumbotron {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
.header-home .jumbotron .lead {
  opacity: 1;
  visibility: visible;

  padding: 5px 5px 5px 10px;
  margin-left: -5px;
  height: auto;
}
.jumbotron h1 {
  font-family: tangoSans;
  color:  #ffffff;
  margin-top: 5px;
  text-shadow: 0px 0px 20px #444444;
  font-size: 4em;
  letter-spacing: -1px;
  transition: all 1s;
}
.header-home .jumbotron h1 {
  font-size: 7em;
  margin-top: 20px;
}
@media (max-width: 1200px) {
  .jumbotron h1 {
    font-size: 3em;
    letter-spacing: -1px;
  }
  .jumbotron .lead {
    font-size: 1.2em;
  }
  .header-home .jumbotron h1 {
    font-size: 4em;
    letter-spacing: -1px;
  }
  .header-home .jumbotron .lead {
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

blockquote {
  border-left: 8px solid grey;
  padding-left: 14px;
}
</style>
<script setup>
const config = useRuntimeConfig();
const { locale, locales } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const route = useRoute();

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const pageClass = computed(() => {
  if (route.name && route.name.startsWith("index")) {
    return 'header header-home'
  }
  return 'header '
})
</script>
