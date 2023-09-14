import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtistView from '../views/ArtistView.vue'
import NewHome from '../views/NewHome.vue'
import Group from '../views/GroupView.vue'
import Interview from '../views/group/Interview.vue'
import BioView from '../views/group/Interview.vue'
import SongView from '../views/SongView.vue'
import GroupLayout from '../layout/GroupLayout.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: NewHome  
    },
    {
      path: '/group',
      component: GroupLayout, children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '',
          component: BioView
        },
        {
        
          path: 'songs',
          component: SongView
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'interview',
          component: Interview
        }
      ]
    },
  ]
})

export default router
