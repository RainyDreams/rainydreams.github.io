<script setup>
import { ref } from "vue";
const tool_list = ref([]);
(async () => {
  tool_list.value = [
    {
      name: "code",
      title: "加密解密",
      desc: "将字符串按照指定规则加密解密",
      author: 'Zhang',
      updateTime: '2023-08-20',
    }
  ];
})();
</script>

<template>
  <div class="content">
    <div class="container">
      <div class="tools-view row">
        <template v-for="(item, i) in tool_list" :key="i">
          <div class="col-md-4">
            <router-link :to="`/tools/${item.name}`" class="tools-item">
              <div class="title">{{ item.title }}</div>
              <div class="describe">{{ item.desc }}</div>
              <div class="author">{{ item.author }}</div>
              <div class="update-time">更新时间：{{ item.updateTime }}</div>
              <div class="background" v-if="item.img">
                <img src="" alt="" />
                <div class="masking-out"></div>
              </div>
            </router-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.tools-view {
}
.tools-item {
  display: block;
  background: #333;
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 16px;
  padding: 1rem;
  .title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }
  .describe {
    font-size: .8rem;
    color: #999;
  }
  .background {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    .masking-out {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 16px;
    }
  }
  .background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
  .author {
    font-size: .8rem;
    color: #999;
  }
  .update-time {
    font-size: .8rem;
    color: #999;
  }
  &:hover{
    box-shadow:0 0 10px #9992;
  }
}
</style>