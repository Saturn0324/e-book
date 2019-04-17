<template>
  <div>
    <div class="books">
      <div class="book">
        <img :src="book1.pic" class="bookPic">
        <div class="details">
          <div class="Title">
            <a class="title" href="http://localhost:8080/#/book">{{book1.title}}&nbsp&nbsp&nbsp</a>
            <b class="author"> 作者: {{book1.author}}</b>
          </div>
          <div class="Price">
            <b class="price">{{price}}</b>
          </div>
          <div class="ITD">
            <b class="itd">&nbsp&nbsp&nbsp&nbsp{{book1.itd}}</b>
          </div>
        </div>
      </div>
      <div class="book">
        <img :src="book2.pic" class="bookPic">
        <div class="details">
          <div class="Title">
            <b class="title">{{book2.title}}&nbsp&nbsp&nbsp</b>
            <b class="author"> 作者: {{book2.author}}</b>
          </div>
          <div class="Price">
            <b class="price">{{price}}</b>
          </div>
          <div class="ITD">
            <b class="itd">&nbsp&nbsp&nbsp&nbsp{{book2.itd}}</b>
          </div>
        </div>
      </div>
      <div class="book">
        <img :src="book3.pic" class="bookPic">
        <div class="details">
          <div class="Title">
            <b class="title">{{book3.title}}&nbsp&nbsp&nbsp</b>
            <b class="author"> 作者: {{book3.author}}</b>
          </div>
          <div class="Price">
            <b class="price">{{price}}</b>
          </div>
          <div class="ITD">
            <b class="itd">&nbsp&nbsp&nbsp&nbsp{{book3.itd}}</b>
          </div>
        </div>
      </div>
      <div class="book">
        <img :src="book4.pic" class="bookPic">
        <div class="details">
          <div class="Title">
            <b class="title">{{book4.title}}&nbsp&nbsp&nbsp</b>
            <b class="author"> 作者: {{book4.author}}</b>
          </div>
          <div class="Price">
            <b class="price">{{price}}</b>
          </div>
          <div class="ITD">
            <b class="itd">&nbsp&nbsp&nbsp&nbsp{{book4.itd}}</b>
          </div>
        </div>
      </div>
      <div class="book">
        <img :src="book5.pic" class="bookPic">
        <div class="details">
          <div class="Title">
            <b class="title">{{book5.title}}&nbsp&nbsp&nbsp</b>
            <b class="author"> 作者: {{book5.author}}</b>
          </div>
          <div class="Price">
            <b class="price">{{price}}</b>
          </div>
          <div class="ITD">
            <b class="itd">&nbsp&nbsp&nbsp&nbsp{{book5.itd}}</b>
          </div>
        </div>
      </div>
      <div class="book">
        <img :src="book6.pic" class="bookPic">
        <div class="details">
          <div class="Title">
            <b class="title">{{book6.title}}&nbsp&nbsp&nbsp</b>
            <b class="author"> 作者: {{book6.author}}</b>
          </div>
          <div class="Price">
            <b class="price">{{price}}</b>
          </div>
          <div class="ITD">
            <b class="itd">&nbsp&nbsp&nbsp&nbsp{{book6.itd}}</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .books{
    margin: 0 0 0 300px;
  }
  .book{
    display: table-row;
  }
  .bookPic{
    float: left;
    width: 180px;
    height: 240px;
    border: white 10px solid;
  }
  .Title{
    border: solid white 10px;
  }
  .title{
    font-size: 30px;
  }
  .Price{
    text-align: right;
  }
  .details{
    text-align: left;
    float: right;
  }
  .ITD{
    width: 400px;
  }
  .itd{
    font-size: 10px;
    color: gray;
  }
  .price{
    font-size: 40px;
    color: darkred;
  }
</style>

<script>export default {
  name: 'List',
  data(){
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
      },
      book2:{
        title: '流浪的地球',
        author: '刘慈欣',
        pic: require('../images/bookList/流浪的地球.jpg'),
        ISBN: '9787553671413',
        itd: '小说讲述了太阳即将变成红巨星，毁灭全太阳系里的行星，人类启动庞大的地球逃脱计划，在地球的一侧安装上巨大的地球发动机，将整个巨大地球环境圈化为的移民方舟，逃离太阳系，寻找新家园。作品宏伟大气、想象瑰丽，2000年荣获中国科幻银河奖特等奖，被誉为刘慈欣《三体》之外*有名作品。改编自《流浪的地球》的同名科幻电影正在即将被搬上银幕！',
        comments:{
          com1: '此作品极为感人。有人言，没看过这篇小说就不算看过小说。在读过刘慈欣几乎所有作品以后，我毫不怀疑，这个人单枪匹马，把中国科幻文学提升到了*的水平。\n' +
            '\n' +
            '——复旦大学中文系教授　严锋',
          com2: '走进刘慈欣的世界，你立刻会感受到如粒子风暴般扑面而来的澎湃的激情—对科学、对技术的激情。正是这种激情，使他的世界灿烂如银河之心。\n' +
            '\n' +
            '——《科幻世界》杂志副总编　姚海军'
        }
      },
      book3: {
        title: '月亮与六便士',
        author: '毛姆',
        pic: require('../images/bookList/月亮与六便士.jpeg'),
        ISBN: '9787544282086',
        itd: '“满地都是六便士，他却抬头看见了月亮。”\n' +
          '    银行家查尔斯，人到中年，事业有成，为了追求内心隐秘的绘画梦想，突然抛妻别子，弃家出走。他深知：人的每一种身份都是一种自我绑架，唯有失去是通向自由之途。\n' +
          '    人世漫长得转瞬即逝， 有人见尘埃， 有人见星辰。查尔斯就是那个终其一生在追逐星辰的人。',
        comments: {
          com1: '◆ 《月亮与六便士》呈现出一个小说的世界，那里充满了美好、艺术和完美。\n' +
            '——罗曼罗兰（法国著名作家）\n',
          com2: '◆ 读《月亮与六便士》就像一头撞上高耸的冰山，令平庸的生活彻底解体。\n' +
            '——伍尔夫（英国著名作家）\n',
          com3: '◆ 这段时间我又重读了一遍《毛姆全集》。\n' +
            '——村上春树（日本著名作家）\n'
        }
      },
      book4:{
        title: '活着',
        author: '余华',
        pic: require('../images/bookList/活着.jpeg'),
        ISBN: '9787506365437',
        itd: '《活着》是一部充满血泪的小说。余华通过一位中国农民的苦难生活 讲述了人如何去承受巨大的苦难；讲述了眼泪的丰富和宽广；讲述了*望 的不存在：讲述了人是为了活着本身而活着…… ',
        comments: {
          com1: '人生最大的悲哀，莫过于，从财政自由到最后的一亩三分地、挚亲的双双离世、战争的消耗品、九死一生后，自以为尝到甜头的大起大落、无产阶级专制下任人摆布的产物、亲手埋葬至亲挚爱，白发人送黑发人。 可即使是这样！也不要放弃在求生中的理念！因为，只要活着！活着就有希望！！！',
          com2: '余华很厚重的作品，\'活着’这个词本身就很厚重。 活着只是为了活着本身而活，而不是为了其他的，这是他序中的一句话，富贵很惨啊，但是，我在作品中，并没有太感觉到悲惨，而就像看了一个人的故事一样 ，对，富贵的人生，就是他的生活，他的人生就是这样的，我们这些旁观者看着他很惨，但这就是他的生活。'
        }
      },
      book5: {
        title: '皮囊',
        author: '蔡崇达',
        pic: require('../images/bookList/皮囊.jpeg'),
        ISBN: '9787201088945',
        itd: '作者蔡崇达，本着对故乡亲人的情感，用一种客观、细致、冷静的方式，讲述了一系列刻在骨肉间故事。一个福建渔业小镇上的风土人情和时代变迁，在这些温情而又残酷的故事中一一体现。用《皮囊》这个具有指向本质意味的书名，来表达作者对父母、家乡的缅怀，对朋友命运的关切，同时也回答那些我们始终要回答的问题。',
        comments: {
          com1: '★当下写作中的一个惊喜。《皮囊》这个书名具有指向本质的意味，他对故乡和亲人的深情，用一种客观、细致、冷静的方式叙说出来，讲述一个一个生命的故事。\n' +
            '　　——阿来\n',
          com2: '★崇达在几年时间里从记者做到了主编，快却扎实。但这本书并不是与这种事业有成关联的成功学贩卖，他不写遥远的世界与远方的别人，而是在自省中退回到内心,真正直视我们需要共同面对的问题。\n' +
            '　　——白岩松',
          com3: '★我会将这本书带上旅途，在每个静谧陌生的夜晚拿出来慢慢看。这本书他写了很久，我希望自己能读更久。慢一些，不争一些，也许得到更多，到达更快。\n'
        }
      },
      book6: {
        title: '白夜行',
        author: '东野圭吾',
        pic: require('../images/bookList/白夜行.jpeg'),
        ISBN: '9784087474398',
        itd: '一天当中，有太阳升起的时候，也有下沉的时候。人生也一样，有白天和黑夜，只是不会像真正的太阳那样，有定时的日出和日落。有些人一辈子都活在太阳的照耀下，也有些人不得不一直活在漆黑的深夜里。人害怕的，就是本来一直存在的太阳落下不再升起，害怕原本照在身上的光芒消失。★亮司和雪穗为什么活得如此坚强？因为他们已经没有别的生存道路，不会迷茫。不迷茫，才可以那么坚强',
        comments: {
          com1: '★我花费了很多心思创作《白夜行》，这部作品无法轻易概括。我只想站在旁观者的角度描写一个人的成长经历，主人公的内心就交给读者自由想象。登场人物不知道发生了什么，唯有读者清楚真相。——东野圭吾',
          com2: '★《白夜行》将无望却坚守的凄凉爱情和执着而缜密的冷静推理完 美结合，被众多书迷视作东野圭吾作品中的无冕之王。——《北京晚报》'
        }
      }
    }
  }
}
</script>


