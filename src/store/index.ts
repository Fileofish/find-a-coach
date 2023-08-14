import { createStore } from 'vuex';

import coachesModule from '@/store/modules/coaches/index';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    coaches: coachesModule,
  },
});
