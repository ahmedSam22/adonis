<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-12 ">
        <h3
          class="pl-9 text-bolder"
          v-if="counter > 0"
          id="count"
          :counter="counter"
        >
          {{ counter }}
        </h3>
        <h3 v-else class="text-left">your cart is empty</h3>
      </div>
      <div class="col-md-12 col-12 mb-3">
        <v-icon class="mdi mdi-cart" @click="counter++" ></v-icon>
      </div>

      <div class="p-0 mb-5 mainbtns mt-5">
        <v-btn
          class="red white--text ml-8 mr-4 "
          
          v-if="counter > 0"
          data-toggle="tooltip"
          data-placement="top"
          title="click here to remove"
          @click="counter--"
        >
          <v-icon class="mdi mdi-minus"></v-icon>
          </v-btn
        >
        <v-btn
          class="green white--text"
          v-if="counter > 0"
          data-toggle="tooltip"
          data-placement="top"
          title="click here to add "
                    @click="counter++"

          >
          <v-icon class="mdi mdi-plus"></v-icon>
        </v-btn>
      </div>
      <div id="contain" class="col-md-12 mb-7">
        <!--
            to add the item here 
           -->
      </div>
      <div class="col-md-12">
        <v-btn v-if="counter > 0" class="align-left green white--text ml-5 "  @click="confirm" >confirm</v-btn>
      </div>
    </div>
  </div>
</template>
<style scoped>
.mdi-cart {
  font-size: 99px;
  margin-left: 20px;
}
@media only screen and (min-width: 768px) {
  /* For mobile phones: */
  
 
}


</style>
<script>
import mixin from "../mixin/Mixin.js";

export default {
  name: "Cart",
  methods: {
    confirm(){
      confirm('check if you sure to continue purchasing')
    }
  },
  components: {},
  mixins: [mixin],
  data() {
    return {
      
    };
  },
};
</script>
