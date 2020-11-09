/* eslint-disable vue/require-default-prop */
/* eslint-disable vue/require-default-prop */
<template>
  <div class="blog-component col-3 border border-dark shadow-lg m-5 bg-dark text-white">
    <router-link :to="{name: 'Blog', params: {blogId: blog._id}}" class="text-white">
      <div class="d-flex m-4">
        <img :src="blog.creator.picture" alt="" class="img-fluid custom-height mr-3">
        <div class="align-self-center">
          <h4>Title: {{ blog.title }}</h4>
          <p>By: {{ blog.creator.name }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'BlogComponent',
  props: {
    blogProp: Object
  },
  setup(props) {
    return {
      blog: computed(() => props.blogProp)
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
