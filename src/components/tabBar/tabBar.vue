<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabBar"
};
</script>
<style scoped>
#tabBar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: #f6f6f6;
}
</style>