<script setup>
import { onMounted,ref } from "vue";

/**
 * @param { string } wrapIdName    容器id(或class)名称
 * @param { string } contentIdName 容器中内容项id(或class)名称
 * @param { number } column        容器中内容展示列数 手机的话建议改为2
 * @param { number } columnGap     容器中 列 间隔距离 默认为20
 * @param { number } rowGap        容器中 行 间隔距离 默认为20
 */
function waterFall(
  wrapIdName,
  contentIdName,
  columns = 2,
  columnGap = 20,
  rowGap = 20
) {
  const wrapContentWidth = document.querySelector(wrapIdName).offsetWidth - 8;
  const whiteArea = (columns - 1) * columnGap;
  const contentWidth = parseInt((wrapContentWidth - whiteArea) / columns);
  const contentList = document.querySelectorAll(contentIdName);
  const lineConentHeightList = [];
  for (let i = 0; i < contentList.length; i++) {
    contentList[i].style.width = contentWidth + "px";
    const height = contentList[i].clientHeight;
    if (i < columns) {
      contentList[i].style.top = 0;
      contentList[i].style.left = contentWidth * i + columnGap * i + "px";
      lineConentHeightList.push(height);
    } else {
      let minHeight = Math.min(...lineConentHeightList);
      let index = lineConentHeightList.findIndex(
        (listH) => listH === minHeight
      );
      contentList[i].style.top = minHeight + rowGap + "px";
      contentList[i].style.left = (contentWidth + columnGap) * index + "px";
      lineConentHeightList[index] += height + rowGap;
    }
  }
}

const maxims = ref([
  {
    title:'大明',
    body:`明明在下，赫赫在上。天难忱斯，不易维王。天位殷适，使不挟四方。

挚仲氏任，自彼殷商，来嫁于周，曰嫔于京。乃及王季，维德之行。

大任有身，生此文王。维此文王，小心翼翼。昭事上帝，聿怀多福。厥德不回，以受方国。

天监在下，有命既集。文王初载，天作之合。在洽之阳，在渭之涘。

文王嘉止，大邦有子。大邦有子，伣天之妹。文定厥祥，亲迎于渭。造舟为梁，不显其光。

有命自天，命此文王。于周于京，缵女维莘。长子维行，笃生武王。保右命尔，燮伐大商。

殷商之旅，其会如林。矢于牧野，维予侯兴。上帝临女，无贰尔心。

牧野洋洋，檀车煌煌，驷騵彭彭。维师尚父，时维鹰扬。凉彼武王，肆伐大商，会朝清明。`
  },
  {
    title:'杂诗',
    body:`劝君莫惜金缕衣，劝君须惜少年时。
有花堪折直须折，莫待无花空折枝。

青天无云月如烛，露泣梨花白如玉。
子规一夜啼到明，美人独在空房宿。

空赐罗衣不赐恩，一薰香后一销魂。
虽然舞袖何曾舞，常对春风裛泪痕。

不洗残妆凭绣床，也同女伴绣鸳鸯。
回针刺到双飞处，忆著征夫泪数行。

眼想心思梦里惊，无人知我此时情。
不如池上鸳鸯鸟，双宿双飞过一生。

一去辽阳系梦魂，忽传征骑到中门。
纱窗不肯施红粉，徒遣萧郎问泪痕。

莺啼露冷酒初醒，罨画楼西晓角鸣。
翠羽帐中人梦觉，宝钗斜坠枕函声。

行人南北分征路，流水东西接御沟。
终日坡前怨离别，谩名长乐是长愁。

偏倚绣床愁不起，双垂玉箸翠鬟低。
卷帘相待无消息，夜合花前日又西。

悔将泪眼向东开，特地愁从望里来。
三十六峰犹不见，况伊如燕这身材。

满目笙歌一段空，万般离恨总随风。
多情为谢残阳意，与展晴霞片片红。

两心不语暗知情，灯下裁缝月下行。
行到阶前知未睡，夜深闻放剪刀声。

近寒食雨草萋萋，著麦苗风柳映堤。
等是有家归未得，杜鹃休向耳边啼。

水纹珍簟思悠悠，千里佳期一夕休。
从此无心爱良夜，任他明月下西楼。

数日相随两不忘，郎心如妾妾如郎。
出门便是东西路，把取红笺各断肠。

无定河边暮角声，赫连台畔旅人情。
函关归路千馀里，一夕秋风白发生。

花落长川草色青，暮山重叠两冥冥。
逢春便觉飘蓬苦，今日分飞一涕零。

洛阳才子邻箫恨，湘水佳人锦瑟愁。
今昔两成惆怅事，临邛春尽暮江流。

浙江轻浪去悠悠，望海楼吹望海愁。
莫怪乡心随魄断，十年为客在他州。`
  }
])

onMounted(()=>{
  waterFall("#tabContainer", ".maxim-item"); //实现瀑布流
    // 窗口变化自适应布局
  window.onresize = () => {
    return (() => {
      waterFall("#tabContainer", ".maxim-item");
    })();
  };
})
</script>

<template>
  <div class="maxim">
    <div class="container content" >
      <div class="maxim-view" id="tabContainer">
        <div class="maxim-item" v-for="(item,i) in maxims" :key="i">
          <div class="title">{{item.title}}</div>
          <div class="author">{{item.author}}</div>
          <div class="body">{{ item.body }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.maxim {
  background: #d4d2bc;
}
.maxim-view {
  position: relative;
}
.maxim-item {
  // width: 100%;
  // height: 0;
  // padding-bottom: calc((100% / 3) - 20px);
  position: absolute;
  height: auto;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  background: white;
  /* 元素不能中断显示 */
  break-inside: avoid;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  // white-space: nowrap;
  // 文字换行
  word-break: break-all;
  padding:8px
}
</style>