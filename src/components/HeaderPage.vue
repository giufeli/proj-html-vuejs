<template>
  <header>
    <div class="topBar">
      <div class="container">
        <div class="row">
          <div
            v-for="obj in siteData"
            :key="(obj +1)"
            class="col-6"
          >
            {{ obj.openHours }}
          </div>

          <div
            v-for="obj in siteData"
            :key="(obj +2)"
            class="col-6 d-flex justify-content-around gap-3"
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
    <div
      v-for="obj in siteData"
      :key="(obj +1)"
      class="home bg-image"
    >
      <img
        :src="`@/assets/img/${obj.photo[banner1]}`"
        alt="banner1"
      >
      <div class="navBar">
        ciao
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    siteData: Array,
  },
};
</script>

<style lang="scss" scoped>
  .topBar{
    width: 100%;
    height: 45px;
    background-color: rgba(33,51,62,255);
    color: white;
  }
  .container, .row{
    height: 100%;
  }
  .col-6{
    margin: auto;
  }

  .home{
    width: 100%;
    height: 70vh;
  }

</style>
