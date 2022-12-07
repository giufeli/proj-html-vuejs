<template>
  <main>
    <!-- eslint-disable -->
    <div class="background">
      <div class="container py-5">
        <div class="row">
          <div class="col-7">
            <div class="text ">
              SEND A MESSAGE
            </div>
            <div class="d-flex gap-3 mt-4">
              <div class=" title ">
                Get in
              </div>
              <div class="title titleBackground colored">
                Touch
              </div>
            </div>
            <div class="paragraph-light">
                We will respond to your messages as soon as possible
            </div>
            <form action="">
              <div class="row mt-5">
                <div class="col-5">
                  <input type="text" placeholder="Name">
                </div>
                <div class="col-5">
                  <input type="text" placeholder="Email">
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-5">
                  <input type="text" placeholder="Phone">
                </div>
                <div class="col-5">
                  <select class="custom-select" id="inputGroupSelect04">
                    <option selected>Your country</option>
                    <option value="1">Asia</option>
                    <option value="2">Africa</option>
                    <option value="3">Europe</option>
                    <option value="3">America</option>
                    <option value="3">Australia</option>
                  </select>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-10" >
                  <input type="text" placeholder="Message" style="height: 170px; text-align: center;">
                </div>
              </div>
              <div class="row">
                <div class="col-1">
                  <button class="btn btn-info px-3 my-4" type="button">Send</button>
                </div>
              </div>
            </form>

          </div>
          <div class="col-4">
            <div class="smallTitle">
              Vehicle Types
            </div>
            <div class="paragraph-light">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div class="paragraph-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div class="text d-flex justify-content-start align-items-center gap-3 mt-5">
              <div class="text iconCircle"><font-awesome-icon
                icon="fa-solid fa-phone"
                class="icon"
              /></div>
              <div style="font-weight: 300;">{{ siteData.phoneNumber }}</div>
            </div>
            <div class="text d-flex justify-content-start align-items-center gap-3 mt-3">
              <div class="text iconCircle"><font-awesome-icon
                icon="fa-solid fa-envelope"
                class="icon"
              /></div>
              <div style="font-weight: 300;">{{ siteData.email }}</div>
            </div>
            <div class="text d-flex justify-content-start align-items-center gap-3 mt-3">
              <div class="text iconCircle" ><font-awesome-icon icon="fa-solid fa-location-dot" /></div>
              <div style="font-weight: 300;">{{ siteData.location }}</div>
            </div>
            <div class="row">
                <div class="col-7">
                  <button class="btn btn-info btn2 px-3 my-4" type="button">View Map</button>
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
    siteData: Object,
  },
};
</script>

<style lang="scss" scoped>
  .background{
    width: 100%;
    height: 85vh;
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
    background-color: #d9f5f5eb;
    border-radius: 6px;
    padding: 5px;
  }
  .titleBackground{
    background-color: #16928e26;
  }

  input, .custom-select{
    background-color: #e6ece8;
    border: 0;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
  }
  .iconCircle{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin:0;
  }

  .btn2{
    color: #00a1a1;;
  }

</style>
