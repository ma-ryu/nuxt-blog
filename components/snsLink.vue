<template>
  <ul>
    <li>
      <a :href="sns.github.url" target="_blank">
        <font-awesome-icon :icon="sns.github.icon" size="lg" />
      </a>
    </li>
    <li>
      <a :href="sns.twitter.url" target="_blank">
        <font-awesome-icon :icon="sns.twitter.icon" size="lg" />
      </a>
    </li>
    <li>
      <a :href="sns.instagram.url" target="_blank">
        <font-awesome-icon :icon="sns.instagram.icon" size="lg" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      sns: {
        github: {
          url: 'https://github.com/ma-ryu',
          icon: ['fab', 'github']
        },
        twitter: {
          url: 'https://twitter.com/chalulog',
          icon: ['fab', 'twitter']
        },
        instagram: {
          url: 'https://www.instagram.com/ryu.ku.u/?hl=ja',
          icon: ['fab', 'instagram']
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  align-items: center;
  list-style: none;
  li {
    padding-right: 8px;
    a {
      text-decoration: none;
      svg {
        color: black;
      }
    }
  }
}
</style>
