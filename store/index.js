import client from '~/plugins/contentful'

export const state = () => ({
  posts: []
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
  }

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
  }

}
