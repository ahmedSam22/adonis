<template>
    <div class="container mt-2">
  <div class="col-md-12">
    <div class="col-md-6 offset-md-3 centered">
      <h3 class="head">
        Adonis
      </h3>
    </div>
  </div>

  <div class="row">
    <!-- btns-->
    <div
      class="col-lg-2 col-md-2 col-9 d-flex offset-lg-3 offset-md-3 offset-3 btnmain"
    >
      <div class="col-md-12 col-lg-12 log" id="signbtn">
        <button
          type="button"
          class="btn btn-outline-danger "
          style="border: none; width: 100%; margin-left: 0px;"
          @click="sign"
        >
          signup
        </button>
      </div>
      <div class="col-md-12 col-lg-12 col-sm-4  log hide" id="logbtn">
        <button
          type="button"
          class="btn btn-outline-success"
          style="border: none; width: 100%; margin-left: 0px;"
         @click="login"
        >
          login
        </button>
      </div>
      <!-- btns-->
    </div>

    <div class="col-md-6 offset-lg-3 offset-md-3 offset-3 main" id="logid">
      <form action="login">
        <div class="col-md-12">
          <label for="username">user name :</label>
          <input type="text" placeholder="" class="ml-0" />
        </div>
        <div class="col-md-12">
          <label for="password">password :</label>
          <input type="password" placeholder="" class="ml-0" />
        </div>

        <div class="custom-control custom-switch col-md-6 offset-md-3 offset-3 switch">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customSwitch1"
          />
          <label class="custom-control-label" for="customSwitch1"
            >remember password</label
          >
        </div>
        <button type="button" class="btn btn-success col-md-3 offset-md-4">
          login
        </button>
        <div class="col-md-12 links">
          <p class="text-right">
            <small><a href="..."> forget password</a></small>
          </p>
        </div>
      </form>
    </div>

    <!-- start part two-->

    <div
      class="col-md-6 hide offset-md-3 offset-lg-3 offset-3 main signup"
      id="signid"
    >
      <form action="login">
        <div class="col-md-12">
          <!-- first and last name-->
          <label for="first name" class="col-lg-3 col-sm-12 col-12 text-center"
            >first name :</label
          >
          <input
            type="text"
            class="col-lg-2 col-sm-12 col-12 text-center"
            style="width: 100%;"
          />
          <label for="last name" class="col-lg-3 col-sm-12 col-12 text-center"
            >last name :</label
          >
          <input
            type="text"
            class="col-lg-2 col-sm-12 col-12 text-center"
            style="width: 100%;"
          />
        </div>
        <div class="col-md-12">
          <label for="email" class="col-md-5 col-sm-12"
            >enter your E-mail :</label
          >
          <input type="text" class="col-md-5 col-sm-12" style="width: 100%;" />
        </div>
        <div class="col-md-12">
          <label for="password" class="col-md-5"> password : </label>
          <input type="password" class="col-md-5" style="width: 100%;" />
        </div>
        <div class="col-md-12">
          <label for="password" class="col-md-5">confirm password :</label>
          <input type="password" class="col-md-5" style="width: 100%;" />
        </div>
<div class="col-md-12 ">
        <button type="button" class="btn btn-success col-md-3 m-9 ">
          register
        </button>
        </div>
      </form>
    </div>
    <!-- end of part two-->
  </div>
</div>

</template>
<style scoped>
.container {
  background-image: linear-gradient(to bottom, #204 70%, darkblue);
  perspective: 700;
  box-sizing: border-box;
  height: 100vh;
}

/* start header*/
.head {
  color: white; /*here*/
  text-align: center;
  margin-top: 20px;
}
/* end header*/

/*  start form */
.main {
  margin-top: 0px;
  margin-bottom: 10%;
  padding: 20px;
  background-color: rgba(65, 107, 110, 0.7);
  color: rgb(173, 236, 236);
  font-weight: 600;
  border-top-right-radius: 25%;
  border-bottom-left-radius: 25%;
}
input {
  border: none;
  color: white;
  margin: 10px;
  background-color: rgba(255, 255, 255, 0);
  border-bottom: solid 1px blue;
  padding: 0px;
}
input:hover {
  border-bottom: solid 1px red;
  transition: ease-in-out;
  transition-timing-function: ease-in;
  transition-duration: 200ms;
  opacity: 0.5;
}
button {
  margin: 10px;
}
.switch {
  margin-top: 15px;
}
.links {
  text-decoration: none;
  margin-top: 15px;
}
a {
  text-decoration: none;
  color: aquamarine;
}
a:hover {
  text-decoration: none;
  color: red;
}
/*  end form */

.hide {
  display: none;
}
/* start sides botton*/

.log {
  padding: 0px;
}

/* end sides botton*/
.btnmain {
  background-color: rgba(65, 107, 110, 0.7);
  padding: 0px;
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
}
.container {
  background-color: whitesmoke;
}
</style>
<script>
export default {
    name : 'Sign' ,

    methods : {
        sign() {
document.getElementById("logid").classList.add("hide");
document.getElementById("signid").classList.remove("hide");
document.getElementById("signbtn").classList.toggle("hide")
document.getElementById("logbtn").classList.remove("hide")



},
 login() {
   document.getElementById("logid").classList.remove("hide");
document.getElementById("signid").classList.add("hide");
document.getElementById("logbtn").classList.add("hide");
document.getElementById("signbtn").classList.remove("hide")


}

    },

}
</script>