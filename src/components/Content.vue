<template>
             <sequential-entrance>

  <div class="main container-fluid">
    <div
      class="card d-inline-block mr-9 mb-9 col-md"
      style="width: 18rem;"
      v-for="item in items"
      :key="item.index"
      id="mainbuy"
    >
      <div class="card-body col-12">
        <img :src="item.src" height="200em" width="250px" id="image"  />
        <h5 class="card-title">{{ item.title }}</h5>
        {{ price }}

        <h6 class="card-subtitle mb-2 text-muted">{{ item.price }}</h6>
        <p class="card-text">
          {{ item.text }}
        </p>
        <v-btn
          class=" blue m-2 text-18"
          data-toggle="tooltip"
          data-placement="top"
          title="click here to like"
          @click="like"
        >
          <v-icon class="mdi mdi-heart left"> Like </v-icon>
        </v-btn>
        <v-btn
          class="green buy"
          data-toggle="tooltip"
          data-placement="top"
          title="click here to add to cart"
        >
          <v-icon class="mdi mdi-wallet-travel left"> buy </v-icon>
        </v-btn>
      </div>
    </div>

  </div>
   </sequential-entrance>

</template>
<style scoped>
.main {
  overflow-y: scroll;
  height: 100vh;
}
::-webkit-scrollbar {
  display: none;
}
.hide {
  display: none;
}
</style>
<script>
import mixin from "../mixin/Mixin.js";
export default {
  name: "Content",
  mixins: [mixin],
  methods: {
    like: function(e) {
      e.target.classList.toggle("red--text");
    },
  },
  data() {
    return {
      items: [
        {
          title: "title",
          price: Math.floor(Math.random() * 30 + 50) + " EGP",
          text: "material and size more ..",
          src:
            "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png",
        },
        {
          title: "title",
          price: Math.floor(Math.random() * 30 + 50) + " EGP",
          text: "material and size more ..",
          src:
            "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png",
        },
        {
          title: "title",
          price: Math.floor(Math.random() * 30 + 50) + " EGP",
          text: "material and size more ..",
          src:
            "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png",
        },
        {
          title: "title",
          price: Math.floor(Math.random() * 30 + 50) + " EGP",
          text: "material and size more ..",
          src:
            "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png",
        },
        {
          title: "title",
          price: Math.floor(Math.random() * 30 + 50) + " EGP",
          text: "material and size more ..",
          src:
            "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png",
        },
        {
          title: "title",
          price: Math.floor(Math.random() * 30 + 50) + " EGP",
          text: "material and size more ..",
          src:
            "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png",
        },
        {
          title: "title",
          price: Math.floor(Math.random() * 30 + 50) + " EGP",
          text: "material and size more ..",
          src:
            "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png",
        },
      ],
    };
  },
};
</script>
