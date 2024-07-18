<template>
    <b-card-group deck class="front-page-box">
        <b-card
            bg-variant="success" text-variant="white" class="text-center mb-3"
            :header="$t('frontPageBox.software')">
            <h6 class="card-subtitle mb-2">
                {{ $t('frontPageBox.softwareSubtitle') }}
            </h6>
             <b-card-body>
            <b-carousel controls indicators ride="carousel" class="mb-2">
              <b-carousel-slide
                background="none">
                <template #img>
                  <img
                    width="100%"
                    src="/liberia-project-dashboard-500x300.png"
                    alt="Liberia Project Dashboard"
                  />
                </template>
              </b-carousel-slide>
              <b-carousel-slide
                background="none">
                <template #img>
                  <img
                    width="100%"
                    src="/nigeria-development-cooperation-dashboard-500x300.png"
                    alt="Nigeria Development Cooperation Dashboard"
                  />
                </template>
            </b-carousel-slide>
            </b-carousel>
            <b-button :to="localePath({path: 'development-dashboard'})" variant="light">Development Dashboard</b-button>
        </b-card-body>
        </b-card>
        <b-card
            bg-variant="success" text-variant="white" class="text-center mb-3"
            :header="$t('frontPageBox.advisoryServices')">
            <h6 class="card-subtitle mb-2">
                {{ $t('frontPageBox.advisoryServicesSubtitle') }}
            </h6>
            <b-card-body>
                <b-card-text class="text-start">
                    {{ $t('frontPageBox.advisoryServicesProvided') }}
                </b-card-text>
                <ul class="text-start">
                    <li v-for="item in $tm('frontPageBox.advisoryServicesItems')">{{ item.body.static }}</li>
                </ul>
            </b-card-body>
        </b-card>
    </b-card-group>
</template>
<style>
.front-page-box img {
    max-width: 500px; aspect-ratio: auto 500 / 300 important!
}
.carousel-control-next, .carousel-control-prev {
    width: inherit;
    background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}
@media (max-width: 991px) {
    .card-deck {
        display: inherit;
        flex-flow: inherit;
    }
}
</style>
<script setup>
const localePath = useLocalePath();
</script>