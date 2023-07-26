const cacheData = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
};

const getDataFromCache = () => {
  return JSON.parse(localStorage.getItem('data'));
};

const removeDataFromCache = () => {
  localStorage.removeItem('data');
};

const cachePlugin = (store) => {
  store.subscribe((mutation, state) => {
    const { payload } = mutation;

    if (payload.data?.length && state.isCached) return;

    if ('isCached' in payload && !payload.isCached) {
      removeDataFromCache();
    }

    const dataFromCache = getDataFromCache();

    if (!state.data.length && dataFromCache) {
      store.commit('setState', {
        data: dataFromCache,
        isCached: true,
        isLoading: false,
      });

      return;
    }

    if (payload.data?.length) {
      cacheData(payload.data);
    }
  });
};

export default cachePlugin;
