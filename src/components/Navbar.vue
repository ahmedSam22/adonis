<template >
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-0">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
   <router-link to="/"> <a class="navbar-brand" href="#">Adonis</a> </router-link>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 white--text">
      <li class="nav-item active">
     <router-link to="/">    Home  <span class="sr-only">(current)</span> </router-link> 
      </li> 
      <li class="nav-item">
      <router-link to="/About"  >  about  </router-link> 

      </li> 

      <li class="nav-item">
        <router-link to="/COntent"> products </router-link>
      </li>
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
       <v-btn class="success white--text outfit mr-2">
         <router-link to="/Sign"> Sign up / Login</router-link>
        
<i class="mdi mdi-login white--text ml-1"></i>

       </v-btn>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" >
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
      
    </form>
  </div>
</nav>
</template>
<script>
export default {
    name : 'Navbar',
    methods:{
        
    },
    
    data(){
      return{

      }
    }
}
</script>
<style scoped>
* {
    color: white;
}

.v-application a {
  color: aliceblue;
  text-decoration: none;
  margin-right: 5px;
  margin-left: 5px;
  font-weight: bold;
}
.actived {
  color:red !important;
  border-bottom: solid 2px red;
}


</style>