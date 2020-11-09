<template>
  <div class="container-fluid bg-info min-height pt-1">
    <div class="blog-page text-center">
      <div class="modal fade"
           id="exampleModal"
           tabindex="-1"
           role="dialog"
           aria-labelledby="exampleModalLabel"
           aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Make Changes to your Blog
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form class="form-group" type="onsubmit">
                <input type="text"
                       class="form-control"
                       aria-describedby="helpId"
                       placeholder="Title"
                       v-model="state.editedBlog.title"
                >
                <input type="text"
                       class="form-control"
                       aria-describedby="helpId"
                       placeholder="Body"
                       v-model="state.editedBlog.body"
                >
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="submit" data-dismiss="modal" @click.prevent="editBlog()" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border border-dark shadow-lg col-6 m-3 bg-white">
      <h5 class="m-2">
        User: {{ activeBlog.creatorEmail }}:
      </h5>
      <h3 class="m-2">
        Blog-Body: {{ activeBlog.body }}
      </h3>
      <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal" v-if="activeBlog.creatorEmail === profile.email">
        Edit your Blog
      </button>
      <form class="form-group d-flex col-6 offset-6 align-items-center mt-5 py-2" @submit.prevent="addComment()">
        <input type="text"
               class="form-control border border-dark"
               aria-describedby="helpId"
               placeholder="Add Comment Here"
               v-model="state.newComment.body"
        >
        <button class="btn btn-primary rounded m-2" type="submit">
          Comment
        </button>
      </form>
    </div>
    <div class="row justify-content-end">
      <comment-component v-for="comment in comments" :key="comment" :comment-prop="comment" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { blogService } from '../services/BlogService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import CommentComponent from '../components/CommentComponent'
import { commentService } from '../services/CommentService'
import { profileService } from '../services/ProfileService'

export default {
  name: 'BlogPage',
  setup() {
    const route = useRoute()

    const state = reactive({
      editedBlog: {
      },
      newComment: {
        blog: route.params.blogId,
        creatorEmail: AppState.profile.email
      }
    })
    onMounted(async() => {
      blogService.getActiveBlog(route.params.blogId)
      commentService.getActiveComment(route.params.blogId)
      await profileService.getProfile()
    })
    return {
      state,
      activeBlog: computed(() => AppState.activeBlog),
      profile: computed(() => AppState.profile),
      comments: computed(() => AppState.comments),
      addComment() {
        commentService.addComment(state.newComment, route.params.blogId)
      },
      editBlog() {
        blogService.editBlog(state.editedBlog, route.params.blogId)
      }
    }
  },
  components: { CommentComponent }
}
</script>

<style lang="scss" scoped>
.custom-height{
  height: 150px;
}
.min-height{
  min-height: 89vh;
}
</style>
