<template>
  <div>
    <footer class="footer">
      <p>{{ copyright }}</p>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // eslint-disable-next-line no-undef
      copyright: `©️ ${new Date().getFullYear()} Ma-ryu All rights reserved.`
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  color: #fff;
  background-color: #2b4257;
  font-size: 16px;
  justify-content: center;
  align-content: center;
  height: 80px;
  p {
    display: inline-flex;
    align-items: center;
  }
}
</style>
