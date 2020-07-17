import client from '~/plugins/contentful'

export const state = () => ({
  posts: [],
  about: [],
  categories: [],
  tagList: []
})

export const getters = {
  linkTo: () => (name, obj) => {
    return {
      name: `${name}-slug`,
      params: {
        slug: obj.fields.slug
      }
    }
  },
  relatedPosts: state => (v) => {
    const posts = []
    for (let i = 0; i < state.posts.length; i++) {
      const catId = state.posts[i].fields.category.sys.id
      if (v.sys.id === catId) posts.push(state.posts[i])
    }
    return posts
  },
}

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },
  setAbout(state, payload) {
    state.about = payload
  },
  setCategories(state, payload) {
    state.categories = payload
  },
  setTagList(state, payload) {
    state.tagList = payload
  },

}

export const actions = {
  async getPosts({
    commit
  }) {
    await client.getEntries({
      content_type: "post",
      order: '-sys.createdAt'
    }).then(res =>
      commit('setPosts', res.items)
    ).catch(console.error)
  },
  async getAbout({
    commit
  }) {
    await client.getEntries({
      content_type: "about",
      order: '-sys.createdAt'
    }).then(res =>
      commit('setAbout', res.items)
    ).catch(console.error)
  },
  async getCategories({
    commit
  }) {
    await client.getEntries({
      content_type: "category",
      order: 'fields.name'
    }).then(res =>
      commit('setCategories', res.items)
    ).catch(console.error)
  },
  async getTagList({
    commit
  }) {
    await client.getEntries({
      content_type: "tags",
      order: 'fields.name'
    }).then(res =>
      commit('setTagList', res.items)
    ).catch(console.error)
  },
}
