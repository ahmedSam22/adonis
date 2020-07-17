<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
       <div class="col-md-12 col-sm-12 col-12 pt-0">
            <Slider />
       </div>
      <div class="col-md-6 col-sm-6 col-6 py-0">
        <Slide />
      </div>
      <div class="col-md-6 col-sm-6 col-6 py-0" >
                <Slide2 />

      </div>
      </div>
    </div>

  </div>
  
</template>

<script>
import Slider from"@/components/Slider"
import Slide from"@/components/Slide"
import Slide2 from"@/components/Slide2"



export default {
  name: "Home",
  components: {
    Slider , Slide , Slide2
    
  }
};
</script>
