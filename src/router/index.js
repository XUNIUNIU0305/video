import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MP4 from '@/components/video/MP4'
import liveVideo from '@/components/video/liveVideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/MP4',
      name: 'MP4',
      component: MP4
    },
    {
      path: '/liveVideo',
      name: 'liveVideo',
      component: liveVideo
    },
  ]
})
