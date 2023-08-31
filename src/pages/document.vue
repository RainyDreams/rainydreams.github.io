<template>
  <div class="container content">
    <!-- <p v-if="!name">参数错误！</p> -->
    <div class="document">
      <div v-html="markdownBody" />
    </div>
  </div>

</template>

<script setup >

(()=>{
  console.debug(getRandomString(12))
})()

import MarkdownIt from "markdown-it";
import { ref, Suspense, VueElement } from "vue";
import { useRoute } from 'vue-router'
import { getRandomString } from "../utils/base";
const markdown = new MarkdownIt()
const route = useRoute();
const markdownBody = ref(null);
let _find = route.query?.find;
let _id = route.query?.id;
if(_find){
  let arr = JSON.parse(await fetch(`/doc/_data.json`).then(e => e.text()))
  arr.forEach(element => {
    if(element.title == _find){
      _id=element.id
    }
  });
  if(!_id){
    _id="404"
  }
} 


if (_id) {
  let text = await fetch(`/doc/${_id}.md`).then(e => e.text())
  markdownBody.value = markdown.render(text || '# ID错误')
} else {
  markdownBody.value = markdown.render(`# 参数错误
  ### Need Id or Find`)
}





// defineProps({
//   source: {
//     type: String,
//     default: ""
//   }
// });

// getDocument.then(e=>{
//   console.log(e);
//   // return markdown.render(e)
// })

// console.log("🚀 ~ file: document.vue:38 ~ y:", y)

// const source = ref(y)
// console.log("🚀 ~ file: document.vue:40 ~ y:", y)
// console.log("🚀 ~ file: document.vue:41 ~ y:", y)
// console.log("🚀 ~ file: document.vue:42 ~ y:", y)


</script>