import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  profile: {},
  blogs: [],
  myBlogs: [],
  activeBlog: {},
  activeComments: []
})

export function ClearAppState() {
  AppState.myBlogs = []
  AppState.activeBlog = {}
  AppState.activeComments = []
}
