
function getItemsWithTotals(state) {
  const startTime = performance.now();
  const data = state.list.data;

  const derivedData = data.map((datum) => {
    return Object.assign({}, datum, {
      total: datum.price * datum.quantity
    });
  });

  const timeTaken = performance.now() - startTime;
  console.log(`\nAdding Totals Computation Time: ${timeTaken.toFixed(0)}ms`);

  return derivedData;
}

export default getItemsWithTotals;
