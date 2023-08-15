import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import CoachDetails from '@/views/coaches/CoachDetails.vue';
import CoachesList from '@/views/coaches/CoachesList.vue';
import CoachRegistration from '@/views/coaches/CoachRegistration.vue';
import ContactCoach from '@/views/requests/ContactCoach.vue';
import RequestsReceived from '@/views/requests/RequestsReceived.vue';
import NotFound from '@/views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/coaches',
  },
  {
    path: '/coaches',
    component: CoachesList,
  },
  {
    path: '/coaches/:id',
    component: CoachDetails,
    props: true,
    children: [
      {
        path: 'contact',
        component: ContactCoach,
      },
    ],
  },
  {
    path: '/register',
    component: CoachRegistration,
  },
  {
    path: '/request',
    component: RequestsReceived,
  },
  {
    path: '/:notFound(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
