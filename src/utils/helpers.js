export const getFormattedDate = (date) => {
  return new Date(date).toLocaleString(
    'Ru-ru',
    {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    },
  );
};

const formatMoney = (money) => {
  return money.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const getFormattedMoney = (money) => {
  const stringMoney = money.toString();

  if (!stringMoney.includes('.')) {
    return formatMoney(stringMoney);
  }

  const moneyParts = stringMoney.split('.');

  moneyParts[0] = formatMoney(moneyParts[0]);
  moneyParts[1] = moneyParts[1].slice(0, 2);

  return moneyParts.join('.');
};
