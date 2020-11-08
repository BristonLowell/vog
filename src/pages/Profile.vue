<template>
  <div class="about text-center row">
    <div>
      <h1 class="mx-5 col-7">
        Welcome: {{ profile.name }}
      </h1>
      <img class="rounded my-2" :src="profile.picture" alt="" />
    </div>
    <div class="col-3 offset-1">
      <form class="form-group" @submit.prevent="addBlog()">
        <input type="text"
               class="form-control"
               aria-describedby="helpId"
               placeholder="Title"
               v-model="state.newBlog.title"
        >
        <input type="text"
               class="form-control"
               aria-describedby="helpId"
               placeholder="Body"
               v-model="state.newBlog.body"
        >
        <button class="btn btn-success rounded btn-block mt-5" type="submit">
          Add Blog
        </button>
      </form>
    </div>
  </div>
  <div class="row justify-content-center">
    <my-blogs-component v-for="blog in myBlogs" :key="blog._id" :my-prop="blog" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'
import MyBlogsComponent from '../components/MyBlogsComponent'
import { blogService } from '../services/BlogService'
export default {
  name: 'Profile',

  setup() {
    onMounted(() => {
      profileService.getProfile()
      blogService.getMyBlogs()
    })
    const state = reactive({
      newBlog: {}
    })
    return {
      state,
      addBlog() {
        blogService.addBlog(state.newBlog)
      },
      profile: computed(() => AppState.profile),
      myBlogs: computed(() => AppState.myBlogs)
    }
  },
  components: { MyBlogsComponent }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
