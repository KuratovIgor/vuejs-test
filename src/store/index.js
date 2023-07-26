import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';
import getPayments from '@/mocks/getPayments';
import cachePlugin from '@/store/plugins/cachePlugin';

Vue.use(Vuex);

const getPaymentsData = async (params) => {
  let data;

  if (process.env.NODE_ENV === 'production') {
    data = await api.getPayments(params);
  } else {
    data = await getPayments(params);
  }

  return data;
};

export default new Vuex.Store({

  plugins: [cachePlugin],

  state: () => ({
    data: [],
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
    async load({ commit, state }, params = {}) {
      commit('setState', { isLoading: true });

      if (state.isCached) {
        alert('Data fetched from cache!');

        return;
      }

      try {
        const { data } = await getPaymentsData(params);

        if (Array.isArray(data)) {
          commit('setState', { data });
        }
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e?.message);
      } finally {
        commit('setState', { isLoading: false });

        alert('Data fetched from API!');
      }
    },

    disableCache({ commit }) {
      commit('setState', { isCached: false });
    },
  },
});
