// Temporary Data
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
]
const posts = [
  {
    id: 1,
    title: 'Post 1',
    body: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    userId: 1,
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    userId: 1,
  },
  {
    id: 3,
    title: 'Post 3',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    userId: 2,
  },
  {
    id: 4,
    title: 'Post 4',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    userId: 2,
  },
]

export const getPosts = async () => {
  return posts
}

export const getPost = async id => {
  return posts.find(post => post.id === parseInt(id))
}

export const getUser = async id => {
  return users.find(user => user.id === parseInt(id))
}
