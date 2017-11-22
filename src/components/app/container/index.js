import { connect } from 'react-redux';
import App from '../App';
import {
  generateNewItems,
  updateTaxRate
} from '../../../actions';
import getItemsWithTotals from '../../../selectors/getItemsWithTotals';
import getTotalCost from '../../../selectors/getTotalCost';

const mapStateToProps = (state) => {
  const itemsWithTotals = getItemsWithTotals(state);
  const totalCost = getTotalCost(state);
  const tax = state.list.taxRate;
  const totalCostWithTax = totalCost * tax;

  return {
    itemsWithTotals,
    totalCost,
    totalCostWithTax
  };
};

const mapDispatchToProps = dispatch => ({
  generateNewItems: number => dispatch(generateNewItems(number)),
  updateTaxRate: number => dispatch(updateTaxRate(number))
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default container;
