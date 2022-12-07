<template>
  <div>
    <HeaderPage
      :site-data="siteData"
      :arr-menu="arrMenu"
    />
    <MainPage1 :vehicle-types="vehicleTypes" />
    <MainPage2 />
    <MainPage3 />
    <MainPage4
      :result="result"
      :site-data="siteData"
    />
    <FooterPage />
  </div>
</template>

<script>

import HeaderPage from '@/components/HeaderPage.vue';
import MainPage1 from '@/components/MainPage1.vue';
import MainPage2 from '@/components/MainPage2.vue';
import MainPage3 from '@/components/MainPage3.vue';
import MainPage4 from '@/components/MainPage4.vue';
import FooterPage from '@/components/FooterPage.vue';

export default {

  components: {
    HeaderPage,
    MainPage1,
    MainPage2,
    MainPage3,
    MainPage4,
    FooterPage,
  },

  data() {
    return {
      siteData: {
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
      arrMenu: [
        {
          name: 'HOME',
          link: 'https://www.google.it/',
        },
        {
          name: 'ABOUT',
          link: 'https://www.google.it/',
        },
        {
          name: 'SERVICE',
          link: 'https://www.google.it/',
        },
        {
          name: 'PROCESS',
          link: 'https://www.google.it/',
        },
        {
          name: 'TESTIMONIALS',
          link: 'https://www.google.it/',
        },
      ],
      vehicleTypes: [
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
      result: [
        {
          type: 'Certifications',
          number: 128,
        },
        {
          type: 'Employees',
          number: 230,
        },
        {
          type: 'Customers',
          number: 517,
        },
        {
          type: 'Countries Served',
          number: 94,
        },
      ],

    };
  },
};
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap";
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700;900&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
  }

  .marginFix{
    margin: auto;
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  a{
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: #00a1a1;
  }

  .btn{
    --bs-btn-color: white;
    --bs-btn-bg: #038384;
    --bs-btn-border-color: #038384;
  }

  .btn2{
    --bs-btn-bg: 0;
  }

  .icon:hover{
    color: #00a1a1;
    cursor: pointer;
  }

  .paragraph-dark{
    font-size: 15px;
    font-weight: 300;
    color: #a4a4a4;
  }

  .paragraph-light{
    font-size: 15px;
    font-weight: 300;
    color: #818181;
    margin-top: 30px;
  }

  .title{
    font-size: 40px;
    font-weight: 900;
    color: #1c2523;
  }

  .text{
    font-size: 18px;
    font-weight: 600;
    color: #16928e;
  }

  .smallTitle{
    font-size: 20px;
    font-weight: 700;
  }

  .titleBackground{
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 6px;
    background-color: #0f5a577e
  }

  .iconCircle{
    display: flex;
    background-color: #16928e32;
    border-radius:50%;
    padding: 20px;
    aspect-ratio: auto 1/1;
  }

</style>
