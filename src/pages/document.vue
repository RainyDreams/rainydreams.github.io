<template>
  <div class="container">
    <p v-if="!name">参数错误！</p>
    <div v-if="name" v-html="markdownBody" />
  </div>
</template>

<script setup >
import MarkdownIt from "markdown-it";
import { ref } from "vue";
import { useRoute } from 'vue-router'
const markdown = new MarkdownIt()
const route = useRoute();
const name = ref(route.params?.name);
const markdownBody = ref(null);


fetch(`/doc/${name.value}.md`).then(e=>{
  e.text().then(text=>{
    markdownBody.value = markdown.render(text)
  })
}).catch(e=>{
  console.error(e);
})



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