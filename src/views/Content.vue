<template>
   <div class="container-fluid">
       <div class="row">
           <div class="col-md-10 col-sm-12 col-12 py-0">
           <Content  />
           </div>
           <div class="col-md-2 col-sm-12 col-12 py-0">
                <Cart  />
           </div>
       </div>
   </div>
</template>
<script>
import Content from "@/components/Content"
import Cart from "@/components/Cart"
import mixin from"../mixin/Mixin"


export default {
    name : 'content',
    data(){
        return{

        }
    },
    components:{
        Content  , Cart
    },
     mixins : [mixin]
}
</script>
<style  scoped>

</style>
