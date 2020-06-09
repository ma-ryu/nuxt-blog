<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/link01">BLOG</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/link02">WORK</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/link03">CONTACT</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
nav {
  color: black;
  ul {
    display: flex;
    justify-content: flex-end;
    margin-right: 16px;
    li {
      list-style-type: none;
      margin-left: 16px;
      a {
        text-decoration: none;
        color: black;
        font-size: 24px;
      }
    }
  }
}
</style>
