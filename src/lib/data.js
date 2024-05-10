import { unstable_noStore as noStore } from 'next/cache'
import { Post, User } from './models'
import { connectToDb } from './utils'

// Temporary Data
// const users = [
//   { id: 1, name: 'John Doe' },
//   { id: 2, name: 'Jane Doe' },
// ]
// const posts = [
//   {
//     id: 1,
//     title: 'Post 1',
//     body: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//     userId: 1,
//   },
//   {
//     id: 2,
//     title: 'Post 2',
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//     userId: 1,
//   },
//   {
//     id: 3,
//     title: 'Post 3',
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//     userId: 2,
//   },
//   {
//     id: 4,
//     title: 'Post 4',
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//     userId: 2,
//   },
// ]

export const getPosts = async () => {
  try {
    connectToDb()
    const posts = await Post.find()
    return posts
  } catch (error) {
    console.log('Error', error)
    throw new Error('Failed to fetch posts from mongodb')
  }
}

export const getPost = async slug => {
  try {
    connectToDb()
    const post = await Post.findOne({ slug })
    return post
  } catch (error) {
    console.log('Error', error)
    throw new Error('Failed to fetch post from mongodb')
  }
}

export const getUsers = async () => {
  try {
    connectToDb()
    const users = await User.find()
    return users
  } catch (error) {
    console.log('Error', error)
    throw new Error('Failed to find users from mongodb')
  }
}

export const getUser = async id => {
  noStore()
  try {
    connectToDb()
    const user = await User.findById(id)
    return user
  } catch (error) {
    console.log('Error', error)
    throw new Error('Failed to find user from mongodb')
  }
}
