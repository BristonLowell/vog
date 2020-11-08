<template>
  <div class="home container-fluid">
    <div class="row justify-content-center">
      <blog-component v-for="blog in blogs" :key="blog" :blog-prop="blog" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { blogService } from '../services/BlogService'
import BlogComponent from '../components/BlogComponent'
export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      blogService.getAllBlogs()
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
  },
  components: { BlogComponent }
}
</script>
