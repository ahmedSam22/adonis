<template>
  <v-app>
    <Navbar />
 <div class="container-fluid main" id="main">
   <div class="row"> 
     <div class="col-md-2 col-sm-12 col-12 mt-0 py-0">
       <Side />
     </div>

     <div class="col-md-10 col-sm-9 col-12 py-0 mb-0">
         <sequential-entrance>

      <router-view />
         </sequential-entrance>

     </div>
    <Footer />
   </div>
      
          </div>
          
  </v-app>
  
</template>

<script>
import Navbar from"@/components/Navbar"
import mixin from"./mixin/Mixin"
import Side from"@/components/Sidebar"

import Footer from"@/components/Footer"

export default {
  name: "App",
  data(){
    return{
    }
  },
  components: { Navbar , Side,Footer },
  mixins : [mixin],
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
}

v-app {padding: 0px;
margin: 0px;}
.main {width: 100%;
padding: 0px;}

</style>
