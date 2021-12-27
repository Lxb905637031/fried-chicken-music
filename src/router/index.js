import { createRouter, createWebHashHistory } from 'vue-router'

const Recommend = () => import('@/views/recommend'/* webpackChunkName: "recommond" */)
const Singer = () => import('@/views/singer'/* webpackChunkName: "singer" */)
const SinerDetail = () => import('@/views/singer-detail'/* webpackChunkName: "singerDetail" */)
const TopList = () => import('@/views/top-list'/* webpackChunkName: "top-list" */)
const Search = () => import('@/views/search'/* webpackChunkName: "search" */)
const UserCenter = () => import('@/views/user-center'/* webpackChunkName: "user-center" */)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SinerDetail
      }
    ]
  },
  {
    path: '/top-list',
    component: TopList
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/user',
    component: {
      user: UserCenter
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
