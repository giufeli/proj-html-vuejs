<template>
  <main>
    <!-- eslint-disable -->
    <div class="background">
      <div class="container pt-5">
        <div class="row d-flex align-items-center pt-5 justify-content-between">
          <div class="card specialCard">
            <div>
              <div class="logoBg">
                <span id="logo1">NEX</span>
                <span id="logo2">GEN</span>
              </div>
              <div class="radius_rectangle">
              </div>
            </div>
            <div class="paragraph-dark">
              A functional HTML template for Corporate & Business.
            </div>
            <div class="paragraph-dark">
              <div style="margin-top: 10px;">
                <font-awesome-icon
                  icon="fa-solid fa-phone"
                  class="icon"
                /> {{ siteData.phoneNumber }}
              </div>
              <div style="margin-top: 10px;">
              <font-awesome-icon
                icon="fa-solid fa-envelope"
                class="icon"
              />{{ siteData.email }}
              </div>
              <div style="margin-top: 10px;">
                <font-awesome-icon icon="fa-solid fa-location-dot" class="icon"/>{{ siteData.location }}
              </div>
            </div>
            <div>
                <button class="btn btn-info btn2 px-3 my-4" type="button">GET IN TOUCH</button>
            </div>
          </div>
          <div class="card">
            <div class="smallTitle">About</div>
            <div class="paragraph-dark ">
              <ul>
                <li v-for="i in footerObj.about" :key="(i +1)"><a :href="`${i.link}`"><font-awesome-icon icon="fa-solid fa-greater-than" class="icon"/>{{ i.name }}</a></li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="smallTitle">Transport</div>
            <div class="paragraph-dark ">
              <ul>
                <li v-for="i in footerObj.transport" :key="(i +1)"><a :href="`${i.link}`"><font-awesome-icon icon="fa-solid fa-greater-than" class="icon"/>{{ i.name }}</a></li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="smallTitle">Support</div>
            <div class="paragraph-dark ">
              <ul>
                <li v-for="i in footerObj.support" :key="(i +1)"><a :href="`${i.link}`"><font-awesome-icon icon="fa-solid fa-greater-than" class="icon"/>{{ i.name }}</a></li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </div>
    <div class="lastFooter">
      <div class="container d-flex justify-content-between align-items-center" style="height: 100%;">
        <div class="paragraph-dark">
          Enjoy the low price. We are tracking any intention of privacy.
        </div>
        <div class="paragraph-dark">
          2020 NEXGEN is Proudly Powered by <span style="color: #038384;">Codings</span>.
        </div>
      </div>
      <div class="text iconCircle" >
        <a href="#">
          <font-awesome-icon icon="fa-solid fa-arrow-up"/>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    footerObj: Object,
    siteData: Object,
  },
};
</script>

<style lang="scss" scoped>
   .background{
    width: 100%;
    height: 65vh;
    background-color: rgb(15, 15, 15);
  }

  .lastFooter{
    position: relative;
    background-color: black;
    width: 100%;
    height: 70px;
  }
  .title{
    color: white;
  }
  .card{
    padding: 40px;
    height: 350px;
    width: calc(95% / 4);
    background-color: #171819;
    border-radius: 15px;
  }

  li{
    list-style: none;
    margin-top: 10px;
  }

  ul{
    margin: 0px;
    padding: 0px;
  }

  .specialCard{
    background-color: rgb(15, 15, 15);
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .smallTitle{
    font-size: 25px;
    color: white;
  }
  .icon{
    font-size: 18px;
    font-weight: 300;
    color: #a4a4a4;
    margin-right: 10px;
  }

  a{
    color: #a4a4a4;
    margin: 0;
    padding: 0;
  }

  .iconCircle{
    position: absolute;
    display: flex;
    align-items: center;
    top: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
    background-color: #747d744f;
    padding: 15px;
    color: rgba(3, 132, 132, 0.526);
  }

</style>
