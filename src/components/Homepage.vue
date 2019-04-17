<template>
  <div class="imgs">
    <div class="imgset1">
      <img :src="imgHomePic1" class="pic1"/>
    </div>
    <div class="imgset">
      <img :src="imgHomePic2" class="pic2"/>
      <img :src="imgHomePic3" class="pic3"/>
    </div>
<!--    <img :src="imgHomePic4"/>-->
  </div>
</template>

<script>export default {
  data(){
    return{
      imgHomePic1: require('../images/homepic4.jpeg'),
      imgHomePic2: require('../images/homepic1.jpeg'),
      imgHomePic3: require('../images/homepic2.jpg'),
      imgHomePic4: require('../images/homepic1.jpeg')
    }
  }
}
</script>

<style lang="css" >
  .imgs{
  }
  .imgset1{
    display: table-column;
    float: left;
    margin: 0 0 0  200px;
  }
  .imgset{
    display: table-column;
    float: right;
  }
  .pic1{
    display: table-row;
  }
  .pic2{
    height: 375px;
    display: table-row;
  }
  .pic3{
    display: table-row;
    height: 375px;
  }
</style>
