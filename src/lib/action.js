'use server'
import { revalidatePath } from 'next/cache'
import { Post, User } from './models'
import { connectToDb } from './utils'
import { signIn, signOut } from './auth'
import bcrypt from 'bcrypt'

export const addPost = async formData => {
  'use server'

  // const title = formData.get('title')
  // const desc = formData.get('desc')
  // const slug = formData.get('slug')

  const { title, desc, slug, userId } = Object.fromEntries(formData)
  console.log(title, desc, slug, userId)

  // Post
  try {
    connectToDb()
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    })
    await newPost.save()
    console.log('Saved to db')
    revalidatePath('/blog')
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong while creating new post.')
  }
}

// Delete Post
export const deletePost = async formData => {
  const { id } = Object.fromEntries(formData)

  // delete
  try {
    connectToDb()

    await Post.findByIdAndDelete(id)
    console.log('Deleted from db')
    revalidatePath('/blog')
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong while deleting post.')
  }
}

export const handleGithubLogin = async () => {
  'use server'
  await signIn('github')
}

export const handleLogout = async () => {
  'use server'
  await signOut('github')
}

export const register = async (previousState, formData) => {
  const { username, email, password, passwordRepeat, img } =
    Object.fromEntries(formData)

  if (password !== passwordRepeat) {
    return { error: 'Passwords do not match!' }
  }

  // hash password with bcrypt
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  try {
    connectToDb()

    const user = await User.findOne({ username })

    if (user) {
      return { error: 'User already exists!' }
    }

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    })
    await newUser.save()
    console.log('Saved to db')
    return { success: true }
  } catch (error) {
    console.log('Error', error)
    return { error: 'Something went wrong while registering.' }
  }
}

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData)

  try {
    await signIn('credentials', { username, password })
  } catch (error) {
    // console.log('Error:', error)
    if (error.message.includes('credentialssignin')) {
      return { error: 'Invalid username or password!' }
    }
    throw error
  }
}
