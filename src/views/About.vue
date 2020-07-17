<template>
  <div class="container mt-0 py-0">
    <div class="col-md-12 col-sm-12 col-12  main">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" height="150px" width="150px" alt="el-rewsha" style="border-radius:50%" class=" offset-md-5 offset-lg-5 offset-sm-5 offset-3 play">
        <div class="col-md-12 paddings " >
          <h2 class="text-center mt-4 "> {{name}} </h2>
          <p class="text-center">
              {{aboutData}}
          </p>
          <div class="col-md-6 col-sm-12 col-12">
            <label class=" col-md-12">Contact Us</label>
           <div class="col-md-12 "> <v-icon class="mdi mdi-facebook white--text"> </v-icon>
            <a href=""> facebook</a></div>
             <div class="col-md-12"> <v-icon class="mdi mdi-twitter white--text"> </v-icon>
            <a href=""> Twitter</a></div>
             <div class="col-md-12"> <v-icon class="mdi mdi-instagram white--text"> </v-icon>
            <a href=""> Instagram</a></div>
             <div class="col-md-12"> <v-icon class="mdi mdi-mail white--text"> </v-icon>
            <a href=""> E-mail</a></div>
         

          </div>
          <div class="col-md-6 col-sm-12 col-12"></div>
          <p class="mb-0 text-right white--text font-weight-bold">this site created by samir</p>
          </div>
    </div>
  </div>
</template>
<style scoped>
.play {
  margin-bottom: -75px;
  position: relative;
  z-index: 1;
}
.paddings {
  padding-top: 80px;
  background-color: rgba(10, 5, 5, 0.6);
}
label {
  border-bottom: solid 1px green;
  font-size: 30px;
  font-weight: bold;
}
.main {
  height: 100vh;
}
a {
  color : black;
  font-size :24px;
  text-decoration: none;
}
</style>
<script>
export default {
  data(){
      return{
        aboutData : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        name : 'apsum lorem'
      }
  }
}
</script>
