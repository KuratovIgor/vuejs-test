<template>
  <div>
    <input
      type="text"
      v-model="valueInput"
      class="ui-money"
      @input="handleInput"
    />
  </div>
</template>

<script>
import { getFormattedMoney } from '@/utils/helpers';

export default {

  name: 'UiMoney',

  props: {
    value: {
      type: Number,
      require: true,
    },
  },

  data() {
    return {
      valueInput: this.value ?? '',
    };
  },

  methods: {
    isValueInputValid() {
      // const numberRegex = /^[+-]?\d+(\.\d+)?$/;
      const numberRegex = /[0-9 ]+$/;

      return numberRegex.test(this.valueInput);
    },

    replaceCommaWithDot() {
      this.valueInput = this.valueInput.replace(',', '.');
    },

    removeLastSymbolOfValue() {
      this.valueInput = this.valueInput.slice(0, -1);
    },

    getValueWithoutSpaces() {
      return +this.valueInput.replace(/ /g, '');
    },

    handleInput() {
      this.replaceCommaWithDot();

      if (this.valueInput.slice(-1) === '.') return;

      if (!this.isValueInputValid()) {
        this.removeLastSymbolOfValue();
      }

      this.valueInput = getFormattedMoney(this.getValueWithoutSpaces());

      this.$emit('input', this.getValueWithoutSpaces());
    },
  },
};
</script>
