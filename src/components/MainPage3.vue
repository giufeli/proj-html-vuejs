<template>
  <main>
    <!-- eslint-disable -->
    <div class="background">
      <div class="container box">
        <div class="text d-flex justify-content-center pt-5">
          HOW IT WORKS IN PRACTICE
        </div>
        <div class="d-flex justify-content-center gap-3 mt-4">
          <div class="titleBackground title colored">
            Logistical
          </div>
          <div class="title">
            Procedure
          </div>
        </div>
        <div class="paragraph-light d-flex justify-items-center paddingFix">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dignissimos facere quam, illum ipsa quos aliquid cumque enim atque deleniti.
        </div>
      </div>
      <div class="mainBox">
        <div class="line"></div>
        <div class="container d-flex justify-content-between pt-5">
          <div class="cards box text-center">
            <div class="text iconCircle mb-4">01</div>
            <div class="smallTitle">Collection of information</div>
            <div class="paragraph-light">Lorem ipsum dolor sit amet consectetur.</div>
          </div>
          <div class="cards box text-center">
            <div class="text iconCircle mb-4">02</div>
            <div class="smallTitle">Collection of information</div>
            <div class="paragraph-light">Lorem ipsum dolor sit amet consectetur.</div>
          </div>
          <div class="cards box text-center">
            <div class="text iconCircle mb-4">03</div>
            <div class="smallTitle">Collection of information</div>
            <div class="paragraph-light">Lorem ipsum dolor sit amet consectetur.</div>
          </div>
          <div class="cards box text-center">
            <div class="text iconCircle mb-4">04</div>
            <div class="smallTitle">Collection of information</div>
            <div class="paragraph-light">Lorem ipsum dolor sit amet consectetur.</div>
          </div>
          <div class="cards box text-center">
            <div class="text iconCircle mb-4">05</div>
            <div class="smallTitle">Collection of information</div>
            <div class="paragraph-light">Lorem ipsum dolor sit amet consectetur.</div>
          </div>

        </div>

      </div>


    </div>
  </main>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .background{
    width: 100%;
    height: 70vh;
    background-color: white;
  }
  .box{
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  .titleBackground{
    background-color: #16928e26;
  }
  .colored{
    color: #16928e;
  }
  .paddingFix{
    text-align: center;
    padding-left: 250px;
    padding-right: 250px;
  }
  .cards{
    border: 0;
    padding: 20px;
    height: 200px;
    width: calc(90% / 5);
    border-radius: 10px;
  }

  .iconBox{
    display: flex;
    justify-content: space-between;
  }

  .iconCircle{
    display: flex;
    justify-content: center;
    padding: 8px;
    margin: auto;
  }
  .mainBox{
    position: relative;
    width: 100vw;
    z-index: 1;
  }
  .line{
    position: absolute;
    z-index: 999;
    top: 0;
    margin-top: 83px;
    width: 100vw;
    height: 10px;
    background-color: #16928e;
  }
</style>
