import DATA from '../enums';
import getUuid from '../utils/getUuid';

export const generateNewItems = (number) => {
  const numbersOfItemsToGenerate = parseInt(number, 10);
  const data = [];

  for (let index = 0; index < numbersOfItemsToGenerate; index++) {
    data.push({
      index,
      uuid: getUuid(),
      price: Math.floor((Math.random() * 9) + 1) * 10,
      quantity: Math.floor((Math.random() * 9) + 1)
    });
  }

  return {
    type: DATA.GENERATE,
    data
  };
};

export const updateTaxRate = number => ({
  type: DATA.UPDATE_TAX_RATE,
  taxRate: parseFloat(number, 10)
});
