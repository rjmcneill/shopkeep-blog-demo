
function getTotalCost(itemsWithTotals) {
  const startTime = performance.now();

  const totalCost = itemsWithTotals.reduce((totalCostSum, item) => totalCostSum + item.total, 0);

  const timeTaken = performance.now() - startTime;
  console.log(`Total Cost Computation Time: ${timeTaken.toFixed(0)}ms`);

  return totalCost;
}

export default getTotalCost;
