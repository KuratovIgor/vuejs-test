<template>
  <div class="ui-table">
    <div class="ui-table__row ui-table__header">
      <div v-for="(column, index) in columns" :key="index" class="ui-table__cell">{{ column.label }}</div>
    </div>

    <div v-for="row in rows" :key="row.id" class="ui-table__row">
      <div class="ui-table__cell">{{ row.id }}</div>
      <div class="ui-table__cell">{{ row.date }}</div>
      <div class="ui-table__cell">{{ row.name }}</div>
      <div class="ui-table__cell">{{ row.money }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiTable',

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
};
</script>

<style lang="scss" scoped>
.ui-table {
  width: 100%;
  font-size: 16px;

  &__header {
    font-weight: 700;
  }

  &__row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  &__cell {
    display: flex;
    align-items: center;
    justify-content: center;

    // TODO: Добавить переменные
    border: 1px solid #000;
    padding: 10px 0;
  }
}
</style>
