<template>
  <div id="app">
    <router-view></router-view>
    <tabBar>
      <item path="/home">
        <img slot="img1" src="#" alt="图片a1" />
        <img slot="img2" src="#" alt="图片a2" />
        <router-link to="/home" slot="text" tag="div">首页</router-link>
      </item>
      <item path="/stores">
        <img slot="img1" src="#" alt="图片b1" />
        <img slot="img2" src="#" alt="图片b2" />
         <router-link to="/stores" slot="text" tag="div">商品</router-link>
      </item>
      <item path="/shoppingcar">
        <img slot="img1" src="#" alt="图片c1" />
        <img slot="img2" src="#" alt="图片c2" />
        <router-link to="/shoppingcar" slot="text" tag="div">购物车</router-link>
      </item>
      <item path="/mine">
        <img slot="img1" src="#" alt="图片d1" />
        <img slot="img2" src="#" alt="图片d2" />
        <router-link to="/mine" slot="text" tag="div">我的</router-link>
      </item>
    </tabBar>
  </div>
</template>

<script>
import tabBar from "./components/tabBar/tabBar.vue";
import item from "./components/tabBar/item.vue";
import router from "./router/router.js"
export default {
  name: "app",
  components: {
    tabBar,
    item
  },
  router,
 
};
</script>

<style scoped>
/*@import url("../../assets/css/item.css");*/
.body {
  padding: 0px;
  margin: 0px;
}
</style>