<template>
  <main>
    <!-- eslint-disable -->
    <div class="background">
      <img
        :src="`img/${siteData.photo[0].banner2}`"
        alt="banner1"
      >
      <div class="container">
        <div class="content box">
          <div class="text d-flex justify-content-center pt-5">
            WHAT ARE WE DOING
          </div>
          <div class="d-flex justify-content-center gap-3 mt-4">
            <div class="titleBackground title colored">
              Result
            </div>
            <div class="title">
              in Number
            </div>
          </div>
          <div class="resultBox d-flex justify-content-between">
            <div v-for="i in result" class="result text-center">
              <div class="text" style="font-size: 40px;">{{ i.number }}</div>
              <div class="smallTitle pt-2">{{ i.type }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    result: Array,
    siteData: Object,
  },
};
</script>

<style lang="scss" scoped>
  .background{
    width: 100%;
    height: 60vh;
    position: relative;
  }

  img{
    filter: brightness(80%);
    object-fit: cover;
    position: absolute;
  }

  .title{
    color: white;
  }
  .content{
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .smallTitle{
    color: white;
  }
  .box{
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .resultBox{
    padding-top: 60px;
    gap:150px
  }

</style>
