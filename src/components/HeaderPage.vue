<template>
  <header>
    <div class="topBar">
      <div class="container">
        <div class="row">
          <div
            class="col-6 marginFix"
          >
            <font-awesome-icon
              icon="fa-solid fa-clock"
              class="icon"
            />  Open Hours: {{ siteData.openHours }}
          </div>

          <div
            class="col-6 marginFix d-flex justify-content-around gap-3"
          >
            <div>
              <font-awesome-icon
                icon="fa-solid fa-phone"
                class="icon"
              /> {{ siteData.phoneNumber }}
            </div>
            <div>
              <font-awesome-icon
                icon="fa-solid fa-envelope"
                class="icon"
              /> {{ siteData.email }}
            </div>
            <div>
              <font-awesome-icon
                icon="fa-brands fa-facebook-f"
                class="icon"
              />
            </div>
            <div>
              <font-awesome-icon
                icon="fa-brands fa-twitter"
                class="icon"
              />
            </div>
            <div>
              <font-awesome-icon
                icon="fa-brands fa-linkedin-in"
                class="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="home"
    >
      <img
        :src="`img/${siteData.photo[0].banner1}`"
        alt="banner1"
      >
      <div class="navBar">
        <div class="container">
          <div class="row">
            <div class="col-3 marginFix">
              <div>
                <div class="logoBg">
                  <span id="logo1">NEX</span>
                  <span id="logo2">GEN</span>
                </div>
                <div class="radius_rectangle" />
              </div>
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
        <div class="content">
          <div class="text">
            LOGISTIC SERVICE
          </div>
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
    siteData: Object,
    arrMenu: Array,
  },
};
</script>

<style lang="scss" scoped>
  .topBar{
    width: 100%;
    height: 55px;
    background-color: rgba(33,51,62,255);
    color: rgb(210, 210, 210);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .home{
    width: 100%;
    height: 85vh;
    position: relative;
  }
  .navBar{
    position: absolute;
    width: 100%;
    height: 60px;
    top: 0;
    margin-top: 15px;
    color: white;
    font-weight: 600;
  }

  .paragraph{
    color: #666666;
  }

  img{
    filter: brightness(40%);
    opacity: 0.95;
    object-fit: cover;
  }

  .title{
    font-size: 75px;
    color: white;
  }

  .paragraph{
    color: rgb(210, 210, 210);
  }

  .content{
    position: absolute;
    top: 0;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .text{
    font-size: 25px;
  }

</style>
