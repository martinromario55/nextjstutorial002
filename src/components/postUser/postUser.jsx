import React from 'react'
import styles from './postUser.module.css'

const getData = async userId => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    )
    const data = await res.json()
    return data
  } catch (error) {
    throw new Error('Something went wrong while fetching posts data')
  }
}

const PostUser = async ({ userId }) => {
  const user = await getData(userId)

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user?.name}</span>
    </div>
  )
}

export default PostUser
