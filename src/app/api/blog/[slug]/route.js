import { Post } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextResponse } from 'next/server'

export const GET = async (request, { params }) => {
  const { slug } = params
  try {
    connectToDb()
    const post = await Post.findOne({ slug })
    return NextResponse.json(post)
  } catch (error) {
    console.log('Error', error)
    throw new Error('Failed to fetch post!')
  }
}

export const DELETE = async (request, { params }) => {
  const { slug } = params
  try {
    connectToDb()
    await Post.findOneAndDelete({ slug })
    return NextResponse.json('Post deleted')
  } catch (error) {
    console.log('Error', error)
    throw new Error('Failed to fetch post!')
  }
}
