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
      <b-navbar type="light" variant="light" class="primary-navbar">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-container>
            <b-navbar-nav class="w-100 text-center" align="center">
              <b-nav-item href="#what-we-do" class="w-33">What we do</b-nav-item>
              <b-nav-item href="#who-we-are" class="w-33">Who we are</b-nav-item>
              <b-nav-item href="#get-in-touch" class="w-33">Get in touch</b-nav-item>
            </b-navbar-nav>
          </b-container>
        </b-collapse>
      </b-navbar>
      <b-container class="p-5 page-body">
        <b-row>
          <b-col md="12">
            <a id="what-we-do"><h1>What we do</h1></a>
            <img
              src="https://github.com/bsi-liberia/liberia-projects/raw/main/img/liberia-project-dashboard.png"
              width="350px"
              align="right" />
            <p>Working with Liberia's Ministry of Finance
              and Development Planning, we developed the
              <a href="https://liberiaprojects.org">Liberia Project
              Dashboard</a>, a flagship system for a new era of aid and public
              investment management in the country.</p>
            <p>The Dashboard is currently <b>the only system in
              the world</b> which automatically updates financial data from
              donors &ndash; significantly increasing data quality
              and the sustainability of the system. It's lightweight and user
              friendly, but has a wide range of features to meet the needs
              of emerging economies.</p>
            <h2>Developed with civil servants and policy-makers</h2>
            <p>A fast and user-friendly interface helps civil servants keep
              data up to date, providing the information and insights which
              senior policy-makers need to make <b>informed decisions</b>.</p>
            <h2>Integrated with <abbr title="Public Financial Management">PFM</abbr> processes</h2>
            <p>Financial data for government-funded projects can be updated
              by uploading data from
              <abbr title="Integrated Financial Management Information System">IFMIS</abbr>.
                Data can be exported in the format
              needed for the budget process. We're working towards making
              the data useful for debt management.</p>
            <h2>Monitoring and improving project performance</h2>
            <p>Advanced features allow a wide variety of results information
              to be captured in the Dashboard. Projects with low disbursement
              rates can be highlighted to indicate which projects need attention
              to <b>improve performance</b>.
            <h2>Automatically updating financial data</h2>
            <p>For donor-financed projects, the world's most advanced
              <abbr title="International Aid Transparency Initiative">IATI</abbr>
              integration makes it possible to keep financial data up to date
              automatically, substantially improving data quality and reducing
              the burden of data collection.</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <hr />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <a id="who-we-are"><h1>Who we are</h1></a>
            <p>Emergentally was founded by Mark Brough. Mark is an economist and
              software developer with more than a
              decade of experience working with governments, donors and civil
              society. His focus has long been on how to use data to make the best
              use of scarce resources. He has worked on a diverse range of issues
              around aid management, Public Financial Management (PFM) and governance.
              He has worked in Bangladesh, France, Georgia, Germany, Liberia, Myanmar,
              Rwanda, the US, and the UK.</p>
            <p>Emergentally will work primarily with developers based in the
              region our customers are based in.</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <hr />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <a id="get-in-touch"><h1>Get in touch</h1></a>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <h2>Email</h2>
            <p><a href="mailto:info@emergentally.com">info@emergentally.com</a></p>
            <h2>Phone</h2>
            <p><a href="tel:+493061748338">+49 30 6174 8338</a></p>
          </b-col>
          <b-col md="6">
            <h2>Address</h2>
            <p>Emergentally GmbH<br />
              c/o Der Salon<br />
              Schudomastr 45<br />
              12055 Berlin<br />
              Germany</p>
            </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h2>Registration details</h2>
            <p>Emergentally GmbH is registered with the Berlin District court Berlin (Charlottenburg) with registration number HRB 248009.</p>
          </b-col>
        </b-row>
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
  background:  url('~/static/noun-data-5139476.svg') no-repeat right top fixed;
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
<script>
export default {
  name: 'IndexPage'
}
</script>
