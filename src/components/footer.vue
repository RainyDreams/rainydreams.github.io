<script setup>
import { ref } from "vue";
import Octokat from "octokat";
import { getFriendlyTime } from "../utils/base";
const color = ref([]);
const Update = ref({});

var octo = new Octokat({
});

var cb = function (err, val) {
  console.log("🚀 ~ file: footer.vue:12 ~ cb ~ val:", val)
  // console.log(val)

  if (!val) {
    Update.value.time = "";
    Update.value.message = "获取失败";
    return err;
  }

  let pages = val.deployments.read().then(e=>{
    console.log(e);
  })
  console.log("🚀 ~ file: footer.vue:22 ~ cb ~ pages:", pages)

  

  val.commits.read()
  .then((e) => {
    Update.value.time = getFriendlyTime(e.items[0].commit.author.date);
    Update.value.url = e.items[0].html.url;
    Update.value.message = e.items[0].commit.message;
  })
  .catch((e) => {
    Update.value.time = "";
    Update.value.message = "获取失败";
  });
};

octo.repos("RainyDreams", "RainyDreams").fetch(cb);
</script>

<template>
  <div>
    <div class="footer">
      <div class="_container">
        <div class="container">
          <!-- <div class="sitemap"></div>
          <div class="_footer">
            <div class="license"></div>
            <div class="copyright">© 2023 Zhang.</div>
            <div class="details">你正在浏览我的个人网站</div>
          </div> -->
          <div class="focus_me">
            <span class="_title">Focus Me</span>
            <ul class="focus_list">
              <!-- <li>Wechat</li>
              <li>GitHub</li>
              <li>Twitter(X)</li>
              <li></li> -->
              <li>
                <a href="//github.com/RainyDreams/" target="_blank">
                  <icon-github-one
                    size="24"
                    :fill="color[0] ?? '#5f6464'"
                    @mouseover="color[0] = '#1f2328'"
                    @mouseleave="color[0] = null"
                  />
                </a>
              </li>
              <li>
                <a href="//x.com" target="_blank">
                  <icon-twitter
                    size="24"
                    :fill="color[1] ?? '#5f6464'"
                    @mouseover="color[1] = '#1da1f2'"
                    @mouseleave="color[1] = null"
                  />
                </a>
              </li>
              <li>
                <p class="mplogo">
                  <img src="../assets/qrcode_mp.jpg" alt="加载失败" />
                </p>
                <icon-wechat
                  size="24"
                  :fill="color[2] ?? '#5f6464'"
                  @mouseover="color[2] = '#1AAD19'"
                  @mouseleave="color[2] = null"
                />
              </li>
              <li>
                <a href="//weibo.com" target="_blank">
                  <icon-weibo
                    size="24"
                    :fill="color[3] ?? '#5f6464'"
                    @mouseover="color[3] = '#ff8200'"
                    @mouseleave="color[3] = null"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div class="updateTime">
            上一次更新时间<a target="_blank" :href="Update?.url">{{
              Update.message ? Update?.time + " " + Update?.message : "获取中"
            }}</a>
          </div>
          <div class="privite">
            此页面使用Google Analytics和百度统计功能来分析用户行为，详见
            <router-link to="/cookie">Cookie和隐私</router-link>
          </div>
          <div class="copyright">
            Copyright © 2021 - 2023 ChiziIngiin & Zhang.. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mfooter",
};
</script>

<style scoped lang="scss">
* {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
}
ul {
  list-style: none;
  display: flex;
  align-items: flex-start;
  margin: 0;
}
li {
  display: block;
  margin-right: 28px;
  cursor: pointer;
  position: relative;
}
.footer {
  padding-top: 34px;
  padding-bottom: 34px;
}
._title {
  display: block;
  font-size: 20px;
  color: #5f6464;
  font-weight: normal;
}
.focus_me {
  width: 100%;
  border-bottom: 1px solid #dadde3;
  padding-top: 33px;
  box-sizing: content-box;
  display: flex;
  align-items: flex-start;
  padding-bottom: 16px;
}
.container > * {
  padding-top: 8px;
  font-size: 13px;
  color: #555;
}
@media (max-width: 767px) {
  .focus_me {
    flex-direction: column;
  }
  ul {
    padding: 0;
    padding-top: 16px;
  }
}

.mplogo {
  position: absolute;
  bottom: 40px;
  z-index: 50;
  margin: 0;
  padding: 0;
  width: 160px;
  height: 160px;
  border-radius: 16px;
  box-shadow: 0 0 10px 10px #0001;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  img {
    width: 100%;
    height: 100%;
  }
}
li:hover .mplogo {
  opacity: 1;
  visibility: visible;
}
</style>