<template>
  <div>
    <HeaderPage
      :site-data="siteData"
      :arr-menu="arrMenu"
    />
    <MainPage :veichel-types="veichelTypes" />
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
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;900&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
  }

  .marginFix{
    margin: auto;
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
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

  .paragraph{
    font-size: 15px;
    font-weight: 300;
    color: #69696d;
    margin-top: 30px;
  }

  .title{
    font-size: 40px;
    font-weight: 900;
    //color:#191c1e
  }

  .text{
    font-size: 15px;
    font-weight: 600;
    color: #16928e;
  }

  .smallTitle{
    font-size: 18px;
    font-weight: 600;
  }

  .titleBackground{
    padding-left: 10px;
    padding-right: 10px;
    background-color: rgba(218,236,237,0.5) //Come fare opacità senza prendere il testo
    //opacity: 0.5;
  }

</style>
