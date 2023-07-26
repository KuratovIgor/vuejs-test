<template>
  <input
    type="text"
    v-model="valueInput"
    class="ui-money"
    @input="handleInput"
  />
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
      valueInput: '',
    };
  },

  methods: {
    isInputValueValid() {
      const numbersRegex = /[0-9 ]+$/;
      const dotRegex = /[.]/g;

      return numbersRegex.test(this.valueInput) || this.valueInput.match(dotRegex)?.length === 1;
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

      if (!this.isInputValueValid()) {
        this.removeLastSymbolOfValue();
      }

      if (this.valueInput.slice(-1) === '.') return;

      this.valueInput = getFormattedMoney(this.getValueWithoutSpaces());

      this.$emit('input', this.getValueWithoutSpaces());
    },
  },
};
</script>
