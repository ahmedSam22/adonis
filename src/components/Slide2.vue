<template>
    <div class="main" @mouseenter="hoverIn" @mouseleave="hoverout">
<div class="label show" id="label2" >
        <h3> {{message}} </h3>    
</div>
    </div>
</template>
<style  scoped>
.main {
    background-image: url(../assets/slide2.jpg);
    background-size: cover;
    height: 53vh;
    width: 100%;
    overflow: hidden;
background-position: top center;
}
.label {
    background-color: rgba(0, 0, 0, .7);
    height: 100%;
    color: white;
    text-align: center;
    padding: 5px ;
    

}
h3 {
    margin-top: 25%;
}
.show {
    visibility: hidden;
}
</style>
<script>
export default {
    name : 'Slide2',
    data(){
        return{
            message: 'apsum lorem  '
        }
    },
    methods : {hoverIn () {
        document.getElementById('label2').classList.remove('show')
    },
     hoverout (){
        document.getElementById('label2').classList.add('show')
    }}
}
</script>