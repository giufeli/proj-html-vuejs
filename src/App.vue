<template>
  <div>
    <HeaderPage :site-data="siteData" />
    <MainPage />
    <FooterPage />
  </div>
</template>

<script>

import HeaderPage from '@/components/HeaderPage.vue';
import MainPage from '@/components/MainPage.vue';
import FooterPage from '@/components/FooterPage.vue';

export default {

  components: {
    HeaderPage,
    MainPage,
    FooterPage,
  },

  data() {
    return {
      siteData: [
        {
          email: 'cargotransport@gmail.com',
          phoneNumber: '+1(305)1234-5678',
          openHours: 'Mon - Sat - 9:00 - 18:00',
          photo: [
            {
              banner1: 'bg-9.jpg',
              banner2: 'bg-10.jpg',
            },
          ],
        },
      ],
      veichelTypes: [
        {
          name: 'Light',
          weight: '1200Kg',
          img: 'truck-1.png',
        },
        {
          name: 'Medium',
          weight: '6000kg',
          img: 'truck-1.png',
        },
        {
          name: 'Heavy',
          weight: '24000kg',
          img: 'truck-1.png',
        },

      ],

    };
  },
};
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap";
</style>
