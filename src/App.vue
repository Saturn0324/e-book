<template>
  <div id="app">
    <div class="head">
      <b class="headP">Welcome to E-book.com</b>
<!--      <div class="searchBar" >-->
<!--        <b>{{todo}}</b>-->
<!--        <input type="text" v-model="todo"  class="searchInput" @keydown="doAdd($event)" placeholder="请输入关键字"/>-->
<!--        <button @click="getSearch()" class="searchButton">搜索</button>-->
<!--      </div>-->
      <button class="headButton">注册</button>
      <button class="headButton">登录</button>
    </div>
    <div class="midHead">
      <a href="http://localhost:8080/#/home">
        <img :src="imgRoot" alt="root" class="imgRoot" />
      </a>
      <div class="searchBar" >
        <b>{{todo}}</b>
        <input type="text" v-model="todo"  class="searchInput" @keydown="doAdd($event)" placeholder="请输入关键字"/>
        <button @click="getSearch()" class="searchButton">搜索</button>
      </div>
      <div class="bookCart">
        <a href="http://localhost:8080/#/shelf">
          <img :src="imgShelf" alt="bookShelf" class="imgCart">
        </a>
      </div>
    </div>
    <div class="homePic">
      <div class="homePicDiv">
        <a href="http://localhost:8080/#/home">
        <img :src="imgHome"  alt="home" class="imgHome" />
        </a>
<!--        <router-link to="/home"  class="routerLink">首页</router-link>-->
      </div>
      <div class="homePicDiv">
        <a href="http://localhost:8080/#/list">
        <img :src="imgList" alt="list"  class="imgHome"/>
        </a>
      </div>
    </div>
    <div class="router">
      <router-view class="routerView"></router-view>
    </div>
  </div>
</template>


<script>export default {
  data() {
    return {
      imgHome: require('./images/home.png'),
      imgList: require('./images/list.png'),
      imgRoot: require('./images/root.png'),
      imgShelf: require('./images/bookShelf.png'),
      todo: ''
    }
  }
}
</script>

<style lang="css">
  .head{
    background: #24292e;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .headButton{
    float: right;
    border: 2px solid #6d7e8f;
    height: 35px;
    width: 60px;
    margin: 5px 5px;
    background: #6d7e8f;
    color: white;
  }
  .headP{
    color: white;
    text-align: center;
    font-size: 30px;
  }
  .searchBar{
    margin: 10px 0 20px 600px;
    display: inline-block;
    height: 35px;
    position: absolute;
    top: 60px;
  }
  .searchInput{
    height: 25px;
    width: 300px;
  }
  .searchButton{
    height: 30px;
    width: 50px;
    border: 2px solid #6d7e8f;
    background: #6d7e8f;
    color: white;
  }
  .homePic{
    position: absolute;
    top: 130px;
    left: 0;
    right: 0;
    text-align: center;
    margin: 0;
    background: #333;
  }
  .homePicDiv{
    display: inline-block;
    width: 500px;
    margin: 0;
  }
  .imgHome{
    width: 30px ;
    height: 30px;
  }
  .router{
    position: absolute;
    top: 0px;
    margin: 200px 0;
  }
  .midHead{
    margin: 55px 0 0 0;
    background: #f5f5f6;
  }
  .imgRoot{
    width: 200px;
    height: 70px;
    margin: 0 0 0 30px;
  }
  .bookCart{
    text-align: center;
    float: right;
    display: inline-block;
    border: lightgray solid 1px;
  }
  .imgCart{
    width: 150px;
    height: 60px;
  }
  .routerView{
    text-align: center;
  }
</style>
