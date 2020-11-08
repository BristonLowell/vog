<template>
  <div class="blog-page text-center">
    <div class="border border-dark shadow-lg col-6 m-3">
      <h5>{{ activeBlog.body }}</h5>
      <p>{{ activeBlog }}</p>
    </div>
    <form class="form-group" @submit.prevent.stop="editBlog()">
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
      <button class="btn btn-warning rounded btn-block mt-5" type="submit">
        Edit Blog
      </button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { blogService } from '../services/BlogService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
// import { commentService } from '../services/CommentService'

export default {
  name: 'BlogPage',
  setup() {
    const state = reactive({
      editedBlog: {
      }
    })
    const route = useRoute()
    onMounted(async() => {
      await blogService.getActiveBlog(route.params.blogId)
      // commentService.getActiveComment()
    })
    return {
      state,
      activeBlog: computed(() => AppState.activeBlog),
      editBlog() {
        blogService.editBlog(state.editedBlog, route.params.blogId)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
