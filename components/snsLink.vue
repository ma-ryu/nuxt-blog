<template>
  <ul>
    <li>
      <a :href="sns.github.url" target="_blank" aria-label="githubアカウントを開きます。">
        <font-awesome-icon :icon="sns.github.icon" size="lg" />
      </a>
    </li>
    <li>
      <a :href="sns.twitter.url" target="_blank" aria-label="twitterアカウントを開きます。">
        <font-awesome-icon :icon="sns.twitter.icon" size="lg" />
      </a>
    </li>
    <li>
      <a :href="sns.instagram.url" target="_blank" aria-label="instagramアカウントを開きます。">
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
    padding: 4px;
    margin: 4px;
    background: #ddd;
    border-radius: 8px;
    font-weight: bold;
    box-shadow: -8px -8px 15px rgb(240, 255, 250),
      8px 8px 15px rgb(180, 180, 180);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      box-shadow: inset -8px -8px 15px rgb(240, 255, 250),
        inset 8px 8px 15px rgb(190, 190, 190);
      outline: none;
    }
    &:active {
      box-shadow: inset 5px 5px 5px rgb(200, 200, 200),
        inset -6px -6px 10px rgb(230, 230, 230);
      outline: none;
    }
    a {
      text-decoration: none;
      svg {
        color: rgb(0, 0, 0);
        filter: drop-shadow(.7px .7px 1px rgb(50, 255, 250));
      }
    }
  }
}
</style>
