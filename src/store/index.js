import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({

  state: () => ({
    data: [
      {
        id: 1,
        name: 'Bob Lee',
        money: 1000,
        date: '2020-02-24',
      },
      {
        id: 2,
        name: 'John Seek',
        money: 1999.99,
        date: '2020-02-25',
      },
      {
        id: 3,
        name: 'Harry Smith',
        money: 3000.5,
        date: '2020-02-26',
      },
      {
        id: 4,
        name: 'Alex Morphy',
        money: 4000,
        date: '2020-02-27',
      },
      {
        id: 5,
        name: 'Ben Gold',
        money: 5000,
        date: '2020-02-28',
      },
      {
        id: 6,
        name: 'Tim Black',
        money: 10000,
        date: '2020-02-28',
      },
      {
        id: 7,
        name: 'Jimmy Elephant',
        money: 1000000,
        date: '2020-02-30',
      },
    ],
    isLoading: false,
    isCached: false,
  }),

  mutations: {
    setState(state, value) {
      Object.entries(value).forEach(([key, data]) => {
        if (!Array.isArray(state[key]) && state[key] && typeof state[key] === 'object') {
          state[key] = {
            ...state[key],
            ...data,
          };
        } else {
          state[key] = data;
        }
      });
    },
  },

  actions: {
    async load({ commit }, params = {}) {
      commit('setState', { isLoading: true });

      try {
        const { data } = await api.getPayments(params);

        if (Array.isArray(data)) {
          commit('setState', { data });
        }
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e?.message);
      } finally {
        commit('setState', { isLoading: false });
      }
    },
  },
});
