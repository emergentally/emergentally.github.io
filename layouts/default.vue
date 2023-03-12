<template>
  <div>
    <b-container fluid class="p-0">
      <div class="header">
        <b-container class="header-container" style="vertical-align: bottom;">
          <b-jumbotron
            header="Emergentally."
            lead="Data-driven development for emerging economies">
          </b-jumbotron>
        </b-container>
      </div>
      <b-navbar toggleable="lg" type="light" variant="light" class="primary-navbar">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-container>
          <b-navbar-nav>
              <b-nav-item
                :to="localePath({path: menuItem.value})"
                class="ml-lg-4 mr-lg-4"
                v-for="menuItem in $t('menuItems')"
                v-bind:key="menuItem.value">{{ menuItem.text }}</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-lg-auto">
              <b-nav-item-dropdown :text="$t('selectLanguage')" right>
                <b-dropdown-item
                  v-for="locale in $t('languageOptions')"
                  v-bind:key="locale.value"
                  :to="switchLocalePath(locale.value)"
                  :active="$i18n.locale == locale.value">
                  {{ locale.text }}
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-container>
        </b-collapse>
      </b-navbar>
      <b-container class="p-5 page-body">
        <Nuxt />
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
  src: url(~/static/tangosans/TangoSans.ttf);
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
.alert-success {
  color: #ffffff;
  background-color: #448822;
}
</style>
<script>
export default {
}
</script>
