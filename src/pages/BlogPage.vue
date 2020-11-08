<template>
  <div class="blog-page text-center">
    <div class="border border-dark shadow-lg col-6 m-3">
      <h5>{{ activeBlog.body }}</h5>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { blogService } from '../services/BlogService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'BlogPage',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      await blogService.getActiveBlog(route.params.blogId)
    })
    return {
      activeBlog: computed(() => AppState.activeBlog)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
