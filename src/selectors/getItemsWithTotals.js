import { createSelector } from 'reselect';

const getItemData = state => state.list.data;

const getItemsWithTotals = createSelector(
  getItemData,
  (itemData) => {
    const startTime = performance.now();

    const derivedData = itemData.map((datum) => {
      return Object.assign({}, datum, {
        total: datum.price * datum.quantity
      });
    });

    const timeTaken = performance.now() - startTime;
    console.log(`Adding Totals Computation Time: ${timeTaken.toFixed(0)}ms`);

    return derivedData;
  }
);

export default getItemsWithTotals;
