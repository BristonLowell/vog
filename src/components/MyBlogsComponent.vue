<template>
  <div class="my-blogs-component col-3 border border-dark shadow-lg rounded m-3">
    <router-link :to="{name: 'Blog', params: {blogId: myBlog._id}}" class="text-dark">
      <div class="d-flex m-3">
        <img :src="myBlog.creator.picture" alt="" class="img-fluid custom-height m-1">
        <h1 class="m-1 align-self-center">
          {{ myBlog.title }}
        </h1>
      </div>
    </router-link>
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
.custom-height{
  height: 150px;
}
</style>
