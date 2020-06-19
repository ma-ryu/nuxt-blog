import client from '~/plugins/contentful'

export const state = () => ({
  posts: [],
  about: []
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
  },
  setAbout(state, payload) {
    state.about = payload
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
  }

}
