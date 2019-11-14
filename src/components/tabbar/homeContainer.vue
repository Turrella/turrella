<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <!-- <img -->
    <!-- <img src="http://mgmt.dyn123.com/files/images/slot-images/3K/doudizhu.png?_t=1569374720"> -->

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/office.svg" alt />
          <div class="mui-media-body">Home</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <!-- <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span> -->
          <img src="../../img/blackboard.svg" alt />
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
          <img src="../../img/earphone.svg" alt />
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <!-- <span class="mui-icon mui-icon-location"></span> -->
          <img src="../../img/meat.svg" alt />
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <!-- <span class="mui-icon mui-icon-search"></span> -->
          <img src="../../img/tag.svg" alt />
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <!-- <span class="mui-icon mui-icon-phone"></span> -->
          <img src="../../img/script.svg" alt />
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunbotu: []
    };
  },
  created() {
    // this.getLunbotu();
    // this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$axios.get(
        "http://mgmt.dyn123.com/files/images/slot-images/3K/doudizhu.png?_t=1569374720"
      );
      // .then(console.log('result.body'));
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background: url("../../img/banner.png") no-repeat top;
      background-size: 100% 100%;
    }
    &:nth-child(2) {
      background: url("../../img/banner02.png") no-repeat top;
      background-size: 100% 100%;
    }
    &:nth-child(3) {
      background: url("../../img/banner03.png") no-repeat top;
      background-size: 100% 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  border: none;
  background-color: #ffffff;
  img {
    width: 50%;
  }
}
.mui-media-body {
  font-size: 13px;
}
</style>