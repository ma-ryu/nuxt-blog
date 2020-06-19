import client from '~/plugins/contentful'

export const state = () => ({
  posts: [],
  about: [],
  categories: []
})

export const getters = {
  linkTo: () => (name, obj) => {
    return {
      name: `${name}-slug`,
      params: {
        slug: obj.fields.slug
      }
    }
  }
}

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
    console.log(state.posts)
  },
  setAbout(state, payload) {
    state.about = payload
    console.log(state.about)
  },
  setCategories(state, payload) {
    state.categories = payload
    console.log(state.categories)
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
  }
}
