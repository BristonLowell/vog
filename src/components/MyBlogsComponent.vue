<template>
  <div class="my-blogs-component col-3 border border-dark shadow-lg rounded m-3">
    <h1> {{ myBlog.title }}</h1>
    <p>{{ myBlog.body }}</p>
    <button class="btn btn-danger btn-block rounded m-2" @click="deleteBlog()">
      Delete Blog
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { blogService } from '../services/BlogService'
export default {
  name: 'MyBlogsComponent',
  props: {
    myProp: Object
  },
  setup(props) {
    return {
      deleteBlog() {
        blogService.deleteBlog(props.myProp.id)
      },
      myBlog: computed(() => props.myProp)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
