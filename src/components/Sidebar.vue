<template>
  <v-card class="m-auto orange text-bold" height="100vh" width="256">
    <h3 class="text-center ">cources</h3>
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
               data-placement="top" 
               title="click to view"
            >
              cairo-maadi
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          class="collapse "
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
              <li>7 September</li>
              <li>155 EGP</li>
              <li>9 maadi street</li>
              <li    data-placement="top" 
               title="click to book now"><a href="https://www.facebook.com/events/714222168999719" target="blank" style="text-decoration : none;color: black"> book now</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
                 data-placement="top" 
               title="click to view"
            >
              alexandria
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
              <li>13 September</li>
              <li>155 EGP</li>
              <li>sultan hussien street</li>
              <li    data-placement="top" 
               title="click to book now"><a href="https://www.facebook.com/events/745144379277174?refid=18" target="blank" style="text-decoration : none;color: black"> book now</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h2 class="mb-0">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
                 data-placement="top" 
               title="click to view"
            >
          cairo - west el balad
            </button>
          </h2>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
              <li>9 november</li>
              <li>355 EGP</li>
              <li>40 mohamed farid</li>
              <li    data-placement="top" 
               title="click to book now"><a href="https://www.facebook.com/groups/2411225059144332/permalink/2413819095551595/" target="blank" style="text-decoration : none;color: black"> book now</a></li>
            </ul>
          </div>
        </div>
      </div>
       <div class="card">
        <div class="card-header" id="headingfour">
          <h2 class="mb-0">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapsefour"
              aria-expanded="false"
              aria-controls="collapsefour"
                 data-placement="top" 
               title="click to view"
            >
              cairo - dokki
            </button>
          </h2>
        </div>
        <div
          id="collapsefour"
          class="collapse"
          aria-labelledby="headingfour"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
             <li>23 november</li>
              <li>155 EGP</li>
              <li>21 gaber ibn hayan</li>
              <li    data-placement="top" 
               title="click to book now"><a href="https://www.facebook.com/events/714222168999719" target="blank" style="text-decoration : none;color: black"> book now</a></li>
            </ul>
          </div>
        </div>
      </div>
       <div class="card">
        <div class="card-header" id="headingfive">
          <h2 class="mb-0">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapsefive"
              aria-expanded="false"
              aria-controls="collapsefive"
               data-placement="top" 
               title="click to view"
            >
              Cairo - abdein
            </button>
          </h2>
        </div>
        <div
          id="collapsefive"
          class="collapse"
          aria-labelledby="headingfive"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
        <li>1 february</li>
              <li>350 EGP</li>
              <li>40 mohamed farid</li>
              <li  data-placement="top" 
               title="click to book now"><a href="https://www.facebook.com/amnas.19/photos/a.3017511458281935/3017511948281886/?type=3&refid=18&__tn__=%2As-R" target="blank" style="text-decoration : none;color: black" > book now</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "Side",
  data() {
    return {
     
    };
  },
};
</script>
<style scoped>
.auto {
  margin-right: 0px !important;
}


.accordion > .card > .card-header {
  background: orange;
}
.card-body {
  background: orange;
}
.card {
  border: 0px solid rgba(0, 0, 0, 0.125);
}
ul {
  background-color: rgba(0, 0, 0, .2);
  list-style-type: ' -   ' ;
}
ul li {
  font-size: 1em;
  margin-bottom: 15px;
}
.btn-link {
    font-weight: 400;
    color: white;
    text-decoration: none;
}
.btn-link:hover {
    font-weight: 400;
    color: gray;
    text-decoration: none;
}
.btn-link:active {
    font-weight: 400;
    color: red;
    text-decoration: none;
}
.btn-link a {
    font-weight: 400;
    color: gray;
    text-decoration: none;
}
.btn-link a:hover {
    font-weight: 400;
    color: gray;
    text-decoration: none;
}

</style>
