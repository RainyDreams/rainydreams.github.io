<template>
  <div class="content">
    <div class="container">
      <div class="tools-view">
        <router-link to="/tools/code" class="tools-item">
          <div class="title">czig 加密解密</div>
          <div class="describe">describe</div>
          <div class="background">
            <img src="" alt="" />
            <div class="masking-out"></div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.tools-item {
  width: 150px;
  height: 150px;
  opacity: 1;
  box-shadow: 0px 8px 150px rgba(0, 0, 0, 0.11);
  position: relative;

  .title {
    position: absolute;
    left: 12px;
    top: 85px;
    width: 126px;
    height: 22px;
    opacity: 1;
    /** 文本1 */
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 34px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    vertical-align: middle;
  }
  .describe {
    position: absolute;

    left: 12px;
    top: 110px;
    width: 126px;
    height: 28px;
    opacity: 0.6;
    /** 文本1 */
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 14px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    vertical-align: middle;
  }
  .background {
    left: 0px;
    top: 0px;
    width: 150px;
    height: 150px;
    opacity: 1;
    img {
      position: absolute;
      left: 51px;
      top: 10.5px;
      width: 92px;
      height: 74px;
      opacity: 0.61;
    }
    .masking-out {
      left: 0px;
      top: 0px;
      width: 150px;
      height: 150px;
      opacity: 1;
      border-radius: 16px;
      background: linear-gradient(
        180deg,
        rgba(192, 130, 242, 1) 0%,
        rgba(75, 89, 224, 1) 100%
      );
    }
  }
}
</style>