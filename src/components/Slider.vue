<template>
  <v-carousel height="45vh">
    <v-carousel-item
      v-for="item in items"
      :key="item.index"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      class="pt-0"
      cover
    ></v-carousel-item>
    
  </v-carousel>
</template>
<style scoped>
.main {
  display: none;
  
}
</style>
<script>
  export default {
      name : 'Slider',
    data () {
      return {
        items: [
          {
            src: 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png',
          },
          {
           src: 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png',
          },
          {
            src:'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png',
          },
         
        ],
      }
    },
  }
</script>