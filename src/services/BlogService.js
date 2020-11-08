/* eslint-disable no-console */
import { api } from './AxiosService'
import { AppState } from '../AppState'
class BlogService {
  async getAllBlogs() {
    try {
      const res = await api.get('api/blogs')
      AppState.blogs = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async getActiveBlog(blogId) {
    try {
      const res = await api.get('api/blogs/' + blogId)
      AppState.activeBlog = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async addBlog(newBlog) {
    try {
      await api.post('api/blogs', newBlog)
      this.getMyBlogs()
    } catch (error) {
      console.error(error)
    }
  }

  async deleteBlog(blogId) {
    await api.delete('api/blogs/' + blogId)
    this.getMyBlogs()
  }

  async editBlog(editedBlog, id) {
    try {
      console.log(editedBlog)
      console.log(id)
      await api.put('api/blogs/' + id, editedBlog)
      this.getActiveBlog(id)
    } catch (error) {
      console.error(error)
    }
  }

  async getMyBlogs() {
    try {
      const res = await api.get('api/profile/blogs')
      console.log(res)
      AppState.myBlogs = res.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const blogService = new BlogService()
