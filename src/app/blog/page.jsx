import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/postCard'

const getData = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
  } catch (error) {
    throw new Error('Something went wrong while fetching posts data')
  }
}

const BlogPage = async () => {
  const posts = await getData()
  return (
    <div className={styles.container}>
      {posts?.map(post => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage
