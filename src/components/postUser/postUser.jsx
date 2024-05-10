import React from 'react'
import styles from './postUser.module.css'
import { getUser } from '../lib/data'

// Fetch data using API
// const getData = async userId => {
//   try {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${userId}`
//     )
//     const data = await res.json()
//     return data
//   } catch (error) {
//     throw new Error('Something went wrong while fetching posts data')
//   }
// }

const PostUser = async ({ userId }) => {
  // With API
  // const user = await getData(userId)

  // Without API
  const user = await getUser(userId)

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user?.name}</span>
    </div>
  )
}

export default PostUser
