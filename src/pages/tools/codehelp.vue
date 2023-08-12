<template>
  <div>
    <div class="content">
      <div class="container">
        <h3>解密出现错误?</h3>
        <p>按可能性大小排序,可能有以下原因</p>
        <p>
          <ul>
            <li style="color:red"><strong>加密的内容超时(3分钟)</strong></li>
            <li style="color:orange">加密的内容不是由本版本的加密器加密的</li>
            <li style="color:orange">加密的内容不是由本加密器加密的</li>
            <li>加密内容损坏(请检查是否漏下<code>_</code>符号)</li>
            <li>浏览器版本过低以及其他兼容性问题</li>
          </ul>
        </p>
        <p>如果您发现我们的加密逻辑有问题,欢迎在GitHub上提Issue</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>