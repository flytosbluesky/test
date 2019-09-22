<template>
  <div class="item">
    <div v-if="!isActive">
      <slot name="img1"></slot>
    </div>
    <div v-else>
      <slot name="img2"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "item",
  props: {
    path: String
  },
  computed: {
    isActive: function() {
      return this.$route.path.indexOf(this.path) != -1;
    }
  },
  //   isActive: {
  //     get:function() {
  //       if (this.$route.path.indexOf(this.path) != -1) {
  //         return true;
  //       }
  //       return  false;
  //     },
  //     set:function(){}
  //   }
  // },

};
</script>


<style scoped>
.item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.active {
  color: red;
}
</style>