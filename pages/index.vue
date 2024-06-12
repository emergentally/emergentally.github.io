<template>
  <div>
    <b-row>
      <b-col md="12">
        <img
          src="/liberia-project-dashboard.png"
          width="350px"
          align="right" />
        <ContentQuery :path="localizedPath($route.path)" find="one" v-slot="{ data }">
          <template v-if="data?.title">
            <Head>
              <Title>{{config.public.title}}</Title>
              <Meta name="twitter:title" :content="`${config.public.title}`" />
              <Meta name="og:title" :content="`${config.public.title}`" />
            </Head>
            <ContentRenderer :value="data" />
          </template>
        </ContentQuery>
      </b-col>
    </b-row>
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
  letter-spacing: -5px;
}
@media (max-width: 1200px) {
  .jumbotron h1 {
    font-size: 3em;
    letter-spacing: -1px;
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
const i18n = useI18n();
function localizedPath(path) {
  // Use this.$i18n.locale to get the current locale
  const locale = i18n.locale.value;
  // Add the locale to the path
  if (path.includes(locale)) {
    return path
  } else {
    return `/${locale}${path}`;
  }
}
const config = useRuntimeConfig()
</script>
