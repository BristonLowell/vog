/* eslint-disable no-console */
import { api } from './AxiosService'
// import { AppState } from '../AppState'
class CommentService {
  async getActiveComment() {
    const res = await api.get('api/comments')
    console.log(res)
  }
}

export const commentService = new CommentService()
