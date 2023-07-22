import Vue from 'vue';

const screen = Vue.observable({
  size: window.innerWidth,
});

window.addEventListener('resize', () => {
  screen.size = window.innerWidth;
});

export default screen;
