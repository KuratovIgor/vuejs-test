export const getFormattedDate = (date) => {
  return new Date(date).toLocaleString('Ru-ru', { day: 'numeric', month: 'numeric', year: 'numeric' });
};

export const getFormattedMoney = (money) => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  // Тоже можно, но этот вариант не работает со строками
  // return money.toLocaleString();
};
