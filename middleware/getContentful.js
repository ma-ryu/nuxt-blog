export default async ({
  store
}) => {
  if (!store.state.posts.length) await store.dispatch('getPosts')
  if (!store.state.about.length) await store.dispatch('getAbout')
}
