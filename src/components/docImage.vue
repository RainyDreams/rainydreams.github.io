<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
  src: String,
});
const src = ref(props.src)
</script>

<template>
  <div class="imageBox">
    <div class="img">
      <slot name="image"></slot>
    </div>
    <div class="describe">
      <slot name="describe"></slot>
    </div>
  </div>
  
</template>

<style lang="scss">
  .imageBox{
    padding:16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 0;
    font-size:0;
    img{
      display: block;
      margin: auto;
      max-width: 760px;
    }
    .describe{
      margin-top: 5px;
      opacity: 0.65;
      font-size: 13px;
      line-height: 15px;
      span{
        display: block;
        text-align: center;
      }
    }
  }
</style>