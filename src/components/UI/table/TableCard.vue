<template>
  <div class="table-card">
    <div class="table-card__content">
      <div class="table-card__title">ID</div>
      <div>{{ row.id }}</div>
    </div>

    <div class="table-card__content">
      <div class="table-card__title">Date</div>
      <div>{{ getFormattedDate(row.date) }}</div>
    </div>

    <div class="table-card__content">
      <div class="table-card__title">Name</div>
      <div>{{ row.name }}</div>
    </div>

    <div>
      <div class="table-card__title">Money</div>
      <div>{{ getFormattedMoney(row.money) }}</div>
    </div>
  </div>
</template>

<script>
import { getFormattedDate, getFormattedMoney } from '@/utils/helpers';

export default {
  name: 'UiTableCard',

  props: {
    row: {
      type: Object,
      required: true,
    },
  },

  methods: {
    getFormattedDate,
    getFormattedMoney,
  },
};
</script>

<style lang="scss" scoped>
.table-card {
  border: 1px solid #000;
  padding: 15px;
  font-size: 16px;

  &__content {
    margin-bottom: 20px;
  }

  &__title {
    font-weight: 700;
  }
}
</style>
