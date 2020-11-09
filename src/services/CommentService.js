/* eslint-disable no-console */
import { api } from './AxiosService'
import { AppState } from '../AppState'
class CommentService {
  async getActiveComment(blogId) {
    const res = await api.get('api/blogs/' + blogId + '/comments')
    AppState.comments = res.data
    console.log(res.data)
  }

  async editComment(commentId, blogId, editedComment) {
    await api.put('api/comments/' + commentId, editedComment)
    this.getActiveComment(blogId)
  }

  async addComment(newComment, blogId) {
    console.log(newComment)
    try {
      await api.post('api/comments', newComment)
      this.getActiveComment(blogId)
    } catch (error) {
      console.error(error)
    }
  }

  async deleteComment(commentId, blogId) {
    try {
      await api.delete('api/comments/' + commentId)
      this.getActiveComment(blogId)
    } catch (error) {
      console.error(error)
    }
  }
}

export const commentService = new CommentService()
