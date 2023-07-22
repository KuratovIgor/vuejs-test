<template>
  <div class="data-table">
    <div class="data-table__filter">
      <ui-money v-model="moneyFilter" />
    </div>

    <ui-table :rows="paginatedRows" :columns="columns" />

    <div class="data-table__paginator">
      <ui-pagination
        v-model="page"
        :pages="pageCount"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataTable',

  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    page: 1,
    pageSize: 4,
    moneyFilter: 0,
  }),

  computed: {
    pageCount() {
      return Math.ceil(this.rows.length / this.pageSize);
    },

    paginatedRows() {
      const lastId = this.page * this.pageSize;
      const firstId = lastId - this.pageSize + 1;

      return this.rows.filter((row) => firstId <= row.id && row.id <= lastId);
    },
  },
};
</script>

<style lang="scss" scoped>
.data-table {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__filter {
    align-self: flex-end;
    margin-bottom: 20px;
  }

  &__paginator {
    align-self: flex-start;
    margin-top: 20px;
  }
}
</style>
