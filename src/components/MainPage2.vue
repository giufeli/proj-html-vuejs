<template>
  <main>
    <!-- eslint-disable -->
    <div class="background">
      <div class="container pt-5">
        <div class="text ">
          ROAD TRANSPORT
        </div>
        <div class="d-flex gap-3 mt-4">
          <div class="title">
            Main
          </div>
          <div class="titleBackground title colored">
            Service
          </div>
        </div>
        <div class="row d-flex align-items-center pt-5 justify-content-between">
          <div class="col-8 paragraph-dark">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae porro unde laboriosam provident ullam, perspiciatis esse animi nam! Modi sapiente fuga suscipit similique sed vero magnam dolore, commodi quibusdam saepe.</div>
          <div class="col-3 d-flex align-items-center justify-content-end">
            <button
              type="button"
              class="btn btn-info btn2"
              >
              READ MORE
              </button>
          </div>
        </div>
        <div class="row d-flex align-items-center pt-5 justify-content-between">
          <div class="card">
            <div class="iconBox my-3">
              <div class="iconCircle">
                <font-awesome-icon icon="fa-solid fa-dolly" class="icon iconBig"/>
              </div>
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon"/>
            </div>
            <div class="smallTitle">Technology</div>
            <div class="paragraph-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis commodi aliquam natus reprehenderit.</div>
          </div>
          <div class="card">
            <div class="iconBox my-3">
              <div class="iconCircle">
                <font-awesome-icon icon="fa-solid fa-temperature-low" class="icon iconBig"/>
              </div>
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon"/>
            </div>
            <div class="smallTitle">Reefer Cargo</div>
            <div class="paragraph-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis commodi aliquam natus reprehenderit.</div>
          </div>
          <div class="card">
            <div class="iconBox my-3">
              <div class="iconCircle">
                <font-awesome-icon icon="fa-solid fa-boxes-stacked" class="icon iconBig "/>
              </div>
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon"/>
            </div>
            <div class="smallTitle">Dry Cargo</div>
            <div class="paragraph-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis commodi aliquam natus reprehenderit.</div>
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

</style>
