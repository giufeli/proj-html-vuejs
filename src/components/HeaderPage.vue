<template>
  <header>
    <!-- Aggiungere icone -->
    <div class="topBar">
      <div class="container">
        <div class="row">
          <div
            v-for="obj in siteData"
            :key="(obj +1)"
            class="col-6 marginFix"
          >
            Open Hours: {{ obj.openHours }}
          </div>

          <div
            v-for="obj in siteData"
            :key="(obj +2)"
            class="col-6 marginFix d-flex justify-content-around gap-3"
          >
            <div>
              {{ obj.phoneNumber }}
            </div>
            <div>
              {{ obj.email }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ho provato a fare un ciclo per rendere dinamica l'immagine -->
    <div
      v-for="obj in siteData"
      :key="(obj +1)"
      class="home"
    >
      <!-- <img                                        Quale sintassi usare per renderla dinamica?
        :src="`@/assets/img/${obj.photo[banner1]}`"
        alt="banner1"
      > -->
      <img
        src="@/assets/img/bg-9.jpg"
        alt="banner1"
      >
      <div class="navBar">
        <div class="container">
          <div class="row">
            <div class="col-3 marginFix">
              <span id="logo1">NEXT</span>
              <span id="logo2">GEN</span>
            </div>
            <div class="col-9 marginFix">
              <div class="d-flex">
                <div
                  v-for="i in arrMenu"
                  :key="(i +1)"
                  class="marginFix text-center"
                >
                  <a :href="`${i.link}`">{{ i.name }}</a>
                </div>
                <div class="marginFix text-center">
                  <font-awesome-icon
                    icon="fa-regular fa-user"
                    class="icon"
                  />
                </div>
                <div class=" marginFix text-center">
                  <button
                    type="button"
                    class="btn btn-info"
                  >
                    GET IN TOUCH
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="content text">
          <div>LOGISTIC SERVICE</div>
          <div class="row">
            <div class="col-6">
              <div class="title">
                CARGO TRANSPORT
              </div>

              <div class="paragraph">
                <!-- eslint-disable-next-line -->
                Fractional or exlcusive road cargo trasportation to all regions, whit small, medium and large vehicle
              </div>
              <div class="d-flex gap-4 mt-4">
                <button
                  type="button"
                  class="btn btn-info"
                >
                  GET IN TOUCH
                </button>
                <button
                  type="button"
                  class="btn btn-info btn2"
                >
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    siteData: Array,
    arrMenu: Array,
  },
};
</script>

<style lang="scss" scoped>
  .topBar{
    width: 100%;
    height: 45px;
    background-color: rgba(33,51,62,255);
    color: rgb(210, 210, 210);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .home{
    width: 100%;
    height: 70vh;
    position: relative;
  }
  .navBar{
    position: absolute;
    width: 100%;
    height: 60px;
    top: 0;
    color: white;
    font-weight: 600;
  }

  img{
    filter: brightness(40%);
    opacity: 0.95;
  }

  #logo1{
    font-size: 30px;
    color: #038384;
    font-weight: 900;
  }

  #logo2{
    font-size: 30px;
    color: rgb(210, 210, 210);
    font-weight: 900;
  }

  .content{
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
  .text{
    height: 100%;
    font-size: 25px;
    font-weight: 600;
    color: #038384;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;

  }
  .title{
    font-size: 75px;
    font-weight: 900;
    color: white;
  }
  .paragraph{
    font-size: 15px;
    font-weight: 300;
    color: rgb(210, 210, 210);
  }

</style>
