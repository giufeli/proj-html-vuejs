<template>
  <main>
    <!-- eslint-disable -->
    <div class="background">
      <div class="container py-5">
        <div class="row">
          <div class="col-7">
            <div class="text ">
              WHO WE ARE
            </div>
            <div class="d-flex gap-3 mt-4">
              <div class="titleBackground title colored">
                <font-awesome-icon icon="fa-regular fa-gem" /> Excellence
              </div>
              <div class="title">
                in Transport
              </div>
            </div>
              <div class="paragraph-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste similique commodi! Facere alias quaerat aspernatur, nemo ut voluptatum minus pariatur incidunt voluptate? Quaerat, saepe!
              </div>
              <div class="paragraph-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste similique commodi! Facere alias quaerat aspernatur, nemo ut voluptatum minus pariatur incidunt voluptate? Quaerat, saepe!
              </div>
              <div class="italic">
                <div class="styleItalic"></div>
                <div class="paragraph-light specialItalic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste similique commodi! Facere alias quaerat aspernatur, nemo ut voluptatum minus pariatur incidunt voluptate? Quaerat, saepe!
              </div>
              </div>
              <div class="paragraph-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste similique commodi!
              </div>
              <ul class="paragraph-light">
                <li>Lorem ipsum dolor sit amet</li>
                <li>consectetur adipisicing elit</li>
                <li>Esse iste similique commodi</li>
                <li>Facere alias quaerat aspernatur</li>
                <li>Quaerat, saepe!</li>
              </ul>
          </div>
          <div class="col-5">
            <div class="smallTitle">
              Vehicle Types
            </div>
            <div class="row mt-5">
              <div class="col-12 d-flex flex-column">
                <div
                  v-for="obj in vehicleTypes"
                  :key="(obj +1)"
                  class="d-flex mb-3 gap-4"
                  style="height:70px; width: 100%;"
                  >
                    <div class="col-3 bgTruck">
                      <img
                      :src="`img/${obj.img}`"
                      alt="Truck"
                      >
                    </div>

                    <div class="col-5">
                      <div class="smallTitle">
                        {{ obj.name }}
                      </div>
                      <div class="paragraph-light mt-2 pl-3">
                        Max Weight {{ obj.weight }}
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="smallTitle">
                Certifications
              </div>
              <div class="col-6 mt-4 d-flex" style="height:95px;">
                <img src="@/assets/img/certificate.png" alt="">
                <img src="@/assets/img/certificate.png" alt="">
              </div>
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
    vehicleTypes: Array,
  },
};
</script>

<style lang="scss" scoped>
  .background{
    width: 100%;
    height: 90vh;
    background-color: white;
  }
  .colored{
    color: #16928e;
  }
  .italic{
    display: flex;
    font-style: italic;
    justify-content: center;
    align-content: center;
    margin-top: 30px;
  }
  .styleItalic{
    width: 10px;
    height: 70px;
    background-color: rgba(218,236,237,255);
    margin: auto;
    margin-right: 30px;
  }
  .specialItalic{
    margin: auto;
  }
  .smallTitle{
    color:#191c1e
  }
  .bgTruck{
    background-color: #00a1a12d;
    border-radius: 6px;
    padding: 5px;
  }
  .titleBackground{
    background-color: #16928e26;
  }

</style>
