<template>
  <div>
    <section class="jumbtron">
      <div class="bg-home">
        <img src="../assets/img/bg-home.jpg" alt />
      </div>
    </section>
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
          <h4>About Me</h4>
        </div>
        <div class="content">
          <p>
            ご覧いただき、ありがとうございます。Ma-ryuと申します。
            新潟県在住でWEB開発と趣味で写真の撮影を行なっています。
            WordPressなどを使ったブログ・企業ホームページの作成を行なっています。
            レスポンシブ対応・Googleアナリティクスの導入なども可能です。
          </p>
          <p>
            ユーザーが使いやすいコンテンツ作成を目標に制作しています。
            最近は、表示速度の高速化を目指しユーザーがストレスなく閲覧できるように、Vue.jsを使用した
            WEB作成を学習中です。
            このWEBサイトもNuxt.jsを利用して制作しています。
          </p>
        </div>

        <nuxt-link class="contact-link" to="/contact">
          <p>CONTACT</p>
        </nuxt-link>
      </div>
    </section>
    <section class="latest-posts">
      <div class="headline">
        <h2>最新情報</h2>
        <p>NEW POST</p>
      </div>
      <div class="posts">
        <nuxt-link
          v-for="(post, index) in posts"
          :key="index"
          :to="`posts/${post.fields.slug}`"
          class="post"
        >
          <div class="thumb">
            <img
              :src="
                post.fields.image ? post.fields.image.fields.file.url : null
              "
            />
          </div>
          <div class="post-text">
            <p>{{ formatDate(post.sys.createdAt) }}</p>
            <div class="d-flex justify-start mb-3">
              <v-chip
                class="ma-1"
                label
                v-for="tag in post.fields.tag"
                :key="tag.sys.id"
              >
                {{ tag.fields.name }}
              </v-chip>
            </div>
            <h2>{{ post.fields.title }}</h2>
          </div>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import client from '~/plugins/contentful'

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
  },
  // eslint-disable-next-line no-unused-vars
  asyncData({ params }) {
    return (
      client
        .getEntries({
          content_type: 'post',
          order: '-sys.createdAt'
        })
        .then((entries) => {
          return { posts: entries.items }
        })
        // eslint-disable-next-line no-console
        .catch((e) => console.log(e))
    )
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = String(date.getFullYear())
      const mm = String(date.getMonth() + 1).padStart(2, '0')
      const dd = String(date.getDate()).padStart(2, '0')
      return `${yyyy}.${mm}.${dd}`
    }
  },
  head: {
    title: 'ma-ryu tech-blog'
  }
}
</script>

<style lang="scss">
* {
  font-family: sans-serif;
  margin: 0;
}
.jumbtron {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: -8px;
  @media (max-width: (768px)) {
    margin-top: 55px;
  }
  .bg-home {
    img {
      max-width: 100vw;
      width: 100vw;
      height: 40vh;
      object-fit: cover;
      object-position: 0 100%;
      @media (max-width: (768px)) {
        height: 30vh;
      }
    }
  }
}
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
section.latest-posts {
  padding: 10px;

  .headline {
    h2 {
      width: 200px;
      margin: 0 auto;
      border-bottom: 1px solid black;
      border-width: 1.5px;
      border-radius: 6px;
      padding-bottom: 8px;
    }
  }
  .posts {
    max-width: 1200px;
    margin: 0 auto;
    padding: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #ddd;
    a.post {
      width: calc(100% - 20px);
      border-radius: 8px;
      @media (min-width: (768px)) {
        width: calc(100% / 4 - 20px);
      }
      margin: 10px;
      background: #fff;
      text-decoration: none;
      color: #111;
      .thumb {
        width: 100%;
        padding-bottom: 75%;
        position: relative;
        overflow: hidden;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 100%;
        }
      }
      .post-text {
        padding: 5px 10px 10px;
        p {
          text-align: right;
        }
        h2 {
          text-align: left;
          width: fit-content;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
