import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser'
import { getPost } from '@/components/lib/data'

// Fetch Data using API
// const getData = async slug => {
//   try {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${slug}`
//     )
//     const data = await res.json()
//     return data
//   } catch (error) {
//     throw new Error('Something went wrong while fetching posts data')
//   }
// }
export const generateMetadata = async ({ params }) => {
  const { slug } = params
  const post = await getPost(slug)

  return {
    title: post.title,
    description: post.desc,
  }
}

const SlugPage = async ({ params }) => {
  const { slug } = params
  // With API
  // const post = await getData(slug)

  // Without API
  const post = await getPost(slug)

  console.log('Post', post)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post?.img && (
          <Image
            src={
              // 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              post.img
            }
            fill
            alt=""
            className={styles.img}
          />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post.img && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.desc}>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  )
}

export default SlugPage
