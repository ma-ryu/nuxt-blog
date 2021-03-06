export default async ({
  store
}) => {
  if (!store.state.posts.length) await store.dispatch('getPosts')
  if (!store.state.about.length) await store.dispatch('getAbout')
  if (!store.state.categories.length) await store.dispatch('getCategories')
  if (!store.state.tagList.length) await store.dispatch('getTagList')
}
