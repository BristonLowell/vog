<template>
  <div v-if="comments.creatorEmail === profile.email" class="comment-component border border-dark mt-5 rounded bg-white mr-5 col-6 offset-5">
    <h5 class="mt-2 text-left col-12">
      User: {{ comments.creatorEmail }}:
      <button class="btn btn-danger float-right" @click="deleteComment()">
        X
      </button>
    </h5>
    <div>
      <form class="form-group mt-2 d-flex" @submit.prevent="editComment()">
        <b class="mt-2">Comment:</b>
        <input type="text"
               class="form-control border border-white"
               name=""
               id=""
               aria-describedby="helpId"
               placeholder=""
               v-model="state.editedComment.body"
        >
      </form>
    </div>
  </div>
  <div v-else class="comment-component border border-dark mt-5 rounded bg-white mr-5 col-6 offset-5">
    <h5 class="mt-2 text-left col-10">
      User: {{ comments.creatorEmail }}:
    </h5>
    <p class="text-left">
      <b> Comment: </b>{{ comments.body }}
    </p>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { commentService } from '../services/CommentService'
import { AppState } from '../AppState'
export default {
  name: 'CommentComponent',
  props: {
    commentProp: Object
  },

  setup(props) {
    const state = reactive({
      editedComment: {
        body: props.commentProp.body
      }
    })
    return {
      state,
      comments: computed(() => props.commentProp),
      profile: computed(() => AppState.profile),
      deleteComment() {
        commentService.deleteComment(props.commentProp.id, props.commentProp.blog)
      },
      editComment() {
        commentService.editComment(this.comments.id, this.comments.blog, state.editedComment)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
