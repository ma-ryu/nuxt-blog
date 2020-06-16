<template>
  <section class="about">
    <div class="about-headline">
      <h2>Ma-ryu</h2>
      <ul>
        <li>
          <a :href="sns.github.url" target="_blank">
            <font-awesome-icon :icon="sns.github.icon" />
          </a>
        </li>
        <li>
          <a :href="sns.twitter.url" target="_blank">
            <font-awesome-icon :icon="sns.twitter.icon" />
          </a>
        </li>
        <li>
          <a :href="sns.instagram.url" target="_blank">
            <font-awesome-icon :icon="sns.instagram.icon" />
          </a>
        </li>
      </ul>
    </div>
    <div class="about-me">
      <div class="headline">
        <font-awesome-icon icon="user" />
        <h5>About Me</h5>
      </div>
      <div class="content">
        <p>
          ご覧いただき、ありがとうございます。Ma-ryuと申します。
          新潟県在住でWEB開発と趣味で写真の撮影を行なっています。
          WordPressを使った企業ホームページ・ブログの作成等を学習中です。
          また、Vue.jsを使ったSPA・SSR開発やJavaScriptを使った個人アプリの
          開発も行なっています。
        </p>
        <p>
          ユーザーが使いやすいコンテンツ作成を目標に制作しています。
          最近は、表示速度の高速化を目指しユーザーがストレスなく閲覧できるように、Vue.jsを使用した
          WEB作成を学習中です。 このWEBサイトもNuxt.jsを利用して制作しています。
        </p>
      </div>
      <div class="mb-5">
        <div class="headline">
          <font-awesome-icon icon="code" />
          <h5>My Skills</h5>
        </div>
        <v-treeview
          class="text-left caption"
          dense
          hoverable
          :items="items"
        ></v-treeview>
      </div>
      <nuxt-link class="contact-link" to="/contact">
        <p>CONTACT</p>
      </nuxt-link>
    </div>
  </section>
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
      },
      items: [
        {
          id: 1,
          name: 'HTML'
        },
        {
          id: 2,
          name: 'CSS',
          children: [
            { id: 3, name: 'SCSS' },
            { id: 4, name: 'BEM' },
            { id: 5, name: 'Bootstrap' }
          ]
        },
        {
          id: 6,
          name: 'JavaScript',
          children: [
            {
              id: 7,
              name: 'Vue.js',
              children: [
                { id: 8, name: 'Vuetify' },
                { id: 9, name: 'Nuxt.js' }
              ]
            },
            { id: 10, name: 'TypeScript : 学習中' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  width: 80%;
  position: relative;
  top: 0;
  bottom: 0;
  margin: 24px auto;
  .about-headline {
    text-align: left;
    display: flex;
    justify-content: space-between;
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
            font-size: 24px;
          }
        }
      }
    }
  }
  .about-me {
    .headline {
      margin-top: 16px;
      margin-bottom: 8px;
      display: flex;
      svg {
        margin-right: 16px;
        margin-top: 4px;
      }
    }
    .content {
      padding: 8px;
      p {
        text-align: left;
        line-height: 2;
        margin-bottom: 8px;
        font-size: 12px;
      }
    }
  }
  .contact-link {
    text-decoration: none;
    color: black;
    p {
      border: 1px solid black;
    }
  }
}
</style>
