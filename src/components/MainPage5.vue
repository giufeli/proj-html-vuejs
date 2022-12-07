<template>
  <main>
    <!-- eslint-disable -->
    <div class="background">
      <div class="container pt-5">
        <div class="text text-center ">
            CUSTOMERS
        </div>
        <div class="d-flex gap-3 mt-4 justify-content-center">
            <div class="title">
              Trusted
            </div>
            <div class="titleBackground title colored">
              Feedback
            </div>
        </div>
        <div class="row d-flex align-items-center pt-5 justify-content-center text-center">
            <div class="col-8 paragraph-dark">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae porro unde laboriosam provident ullam, perspiciatis esse animi nam! Modi sapiente fuga suscipit similique sed.
            </div>
        </div>
        <div class="row d-flex align-items-center pt-5 justify-content-between">
                  <div class="card">
                    <img src="@/assets/img/logo-1.png" alt="">
                    <div class="paragraph-dark mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere ipsa cumque saepe sapiente! Sapiente veniam consequuntur omnis, atque provident eius quis, aspernatur fugiat culpa iste ducimus?</div>
                    <div class="paragraph-dark mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit non velit.</div>
                    <div class="d-flex justify-content-end"><font-awesome-icon icon="fa-solid fa-quote-right" class="icon"/></div>
                  </div>
                  <div class="card">
                    <img src="@/assets/img/logo-2.png" alt="">
                    <div class="paragraph-dark mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere ipsa cumque saepe sapiente! Sapiente veniam consequuntur omnis, atque provident eius quis, aspernatur fugiat culpa iste ducimus?</div>
                    <div class="paragraph-dark mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit non velit.</div>
                    <div class="d-flex justify-content-end"><font-awesome-icon icon="fa-solid fa-quote-right" class="icon"/></div>
                  </div>
                  <div class="card">
                    <img src="@/assets/img/logo-3.png" alt="">
                    <div class="paragraph-dark mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere ipsa cumque saepe sapiente! Sapiente veniam consequuntur omnis, atque provident eius quis, aspernatur fugiat culpa iste ducimus?</div>
                    <div class="paragraph-dark mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit non velit.</div>
                    <div class="d-flex justify-content-end"><font-awesome-icon icon="fa-solid fa-quote-right" class="icon"/></div>
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
    height: 85vh;
    background-color: rgb(15, 15, 15);
  }
  .title{
    color: white;
  }
  .card{
    padding: 40px;
    height: 350px;
    width: calc(92% / 3);
    background-color: #171819;
    border-radius: 15px;
  }

  .smallTitle{
    font-size: 25px;
    color: white;
  }
  .icon{
    font-size: 25px;
    color: #16928e56;
  }
  .iconBig{
    font-size: 30px;
    color: #16928e;
  }
  .iconBox{
    display: flex;
    justify-content: space-between;
  }
  img{
    width: 50%;
    filter: brightness(0) invert(1);
  }

  .icon{
    font-size: 30px;
    color: #8181818f;
  }

</style>
