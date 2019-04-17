<template>
    <div class="mainBook">
      <img class="bookPic" :src="book1.pic">
      <div class="details">
        <table class="tab">
          <tr style="background: skyblue;">
            <td class="first">书名</td>
            <td class="first">作者</td>
            <td class="first">ISBN</td>
            <td class="first">简介</td>
            <td class="first">库存</td>
            <td class="first">价格</td>
            <td class="first">加入购物车</td>
          </tr>
          <tr>
            <td class="second">{{book1.title}}</td>
            <td class="second">{{book1.author}}</td>
            <td class="second">{{book1.ISBN}}</td>
            <td class="tdItd">{{book1.itd}}</td>
            <td class="second">{{amount}}</td>
            <td class="second">{{price}}</td>
            <td class="buy">购买</td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>export default {
  data() {
    return{
      amount: 10,
      price: '¥66',
      book1:{
        title: '人间失格',
        author: '太宰治',
        pic: require('../images/bookList/人间失格.jpeg'),
        ISBN: '9787514346404',
        itd: '人间失格,即丧失为人的资格。这是太宰治生平重要的一部作品。全书由作者的序言、后记,以及主角大庭叶藏的三个手札组成,描写主角从青少年到中年，为了逃避现实而不断沉沦,经历自我放逐、酗酒、自杀、用药物麻痹自己，终于一步步走向自我毁灭的悲剧,在自我否定的过程中,抒发自己内心深处的苦闷,以及渴望被爱的情愫.....\n',
        comments: {
          com1: '村上春树《且听风吟》中“十全十美的文章和彻头彻尾的绝望”深受太宰治和三岛由纪夫之影响。\n' +
            '一-佐藤干夫',
          com2: '无论是喜欢他还是讨厌他,是肯定他还是否定他,太宰的作品总拥有着一种不可思议的魔力, 在今后很长一段时间里,太宰笔下生动的描绘都会直逼读者的灵魂,让人无法逃脱。\n' +
            '-一 奥野健男',
          com3: '太宰治的作品分为二个人格,一方面有带着自身经历主人公的挣扎;另一方面是坦然描述着血的事实。正因如此,他比那些把自己当做作上帝的作家，更有一丝人情,更能打动读者。\n' +
            '-一高尔基'
        }
      }
    }
  }
}
</script>

<style scoped>
  .mainBook{
    display: inline-block;
    margin: 0 0 0 200px;
  }
  .bookPic{
    display: inline-block;
  }
  .details{
    border: gray solid 3px;
    height: 240px;
    display: inline-block;
  }
  .first{
    border: skyblue solid 10px;
    text-align: left;
  }
  .second{
    /*border: gray solid 2px;*/
  }
  .tab{
  }
  .tdItd{
    width: 400px;
  }
  .buy{
    border: skyblue solid 6px;
    background: aqua;
  }
</style>
