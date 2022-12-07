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
          <div class="paragraph-light d-flex justify-items-center paddingFix">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dignissimos facere quam, illum ipsa quos aliquid cumque enim atque deleniti.
          </div>
          <div class="resultBox d-flex justify-content-between">
            <div class="result">CIAO</div>
            <div class="result">CIAO</div>
            <div class="result">CIAO</div>
            <div class="result">CIAO</div>
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
    height: 65vh;
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

  .box{
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .result{
    width: calc(90% / 4);
  }
</style>
