import React from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'

const SlugPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          fill
          alt=""
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src={
              'https://images.pexels.com/photos/4850458/pexels-photo-4850458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.desc}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            nisi, tempore ut suscipit voluptatem ipsa consequuntur deserunt
            quasi quia veritatis!
          </p>
        </div>
      </div>
    </div>
  )
}

export default SlugPage
