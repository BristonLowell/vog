/* eslint-disable vue/require-default-prop */
/* eslint-disable vue/require-default-prop */
<template>
  <div class="blog-component col-3 border border-dark shadow-lg m-3">
    <router-link :to="{name: 'Blog', params: {blogId: blog._id}}" class="text-dark">
      <h1>{{ blog.title }}</h1>
    </router-link>
    <!-- {{ blog }} -->
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

<style lang="
                 scss"
                 scoped
    >
</style>
