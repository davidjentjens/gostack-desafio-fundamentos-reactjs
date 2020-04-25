/* eslint-disable no-param-reassign */
const formatValue = (value: number | string): string => {
  value = +value;

  let isIncome = true;

  if (value < 0) {
    isIncome = false;
    value = -value;
  }

  const formattedDecimal = value.toLocaleString('de-DE', {
    minimumFractionDigits: 2,
  });

  const formattedPrice = isIncome
    ? `R$ ${formattedDecimal}`
    : `- R$ ${formattedDecimal}`;

  return formattedPrice;
};
export default formatValue;
