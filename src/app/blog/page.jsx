import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/postCard'
import { getPosts } from '@/lib/data'

export const metadata = {
  title: {
    default: 'Blog Page',
  },
  description: 'Blog posts',
}

// Fetch data using APIs
// const getData = async () => {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json()
//     return data
//   } catch (error) {
//     throw new Error('Something went wrong while fetching posts data')
//   }
// }

// Fetch data using Internal API
const getData = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/blog')
    return res.json()
  } catch (error) {
    console.log('Error', error)
    throw new Error('Something went wrong while fetching posts data')
  }
}

const BlogPage = async () => {
  // With API
  const posts = await getData()

  // Without API
  // const posts = await getPosts()
  return (
    <div className={styles.container}>
      {posts?.map(post => (
        <div className={styles.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage
