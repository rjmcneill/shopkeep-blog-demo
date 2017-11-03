import React from 'react';
import PropTypes from 'prop-types';
import List from '../list/List';
import './stylesheets/index.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.generateNewItems(100);
  }

  componentWillUpdate() {
    this.startTime = performance.now();
  }

  componentDidUpdate() {
    const renderTime = performance.now() - this.startTime;
    console.log(`Render Time: ${renderTime.toFixed(0)}ms\n`);
  }

  onGenerateSubmit(e) {
    e.preventDefault();
    this.props.generateNewItems(this.generateRef.value);
  }

  onTaxSubmit(e) {
    e.preventDefault();
    this.props.updateTaxRate(this.taxRef.value);
  }

  storeGenerateRef(input) {
    this.generateRef = input;
  }

  storeTaxRef(input) {
    this.taxRef = input;
  }

  render() {
    const { itemsWithTotals } = this.props;

    return (
      <div>
        <form onSubmit={event => this.onGenerateSubmit(event)}>
          <span>Generate Some Data:</span>
          <input ref={input => this.storeGenerateRef(input)} type="text" />
        </form>

        <form onSubmit={event => this.onTaxSubmit(event)}>
          <span>Tax Rate:</span>
          <input ref={input => this.storeTaxRef(input)} type="text" />
        </form>

        <div>
          <span>Total cost: {this.props.totalCost}</span>
        </div>

        <div>
          <span>Total cost with tax: {this.props.totalCostWithTax}</span>
        </div>

        <List
          data={itemsWithTotals}
        />
      </div>
    );
  }
}

App.propTypes = {
  generateNewItems: PropTypes.func.isRequired,
  updateTaxRate: PropTypes.func.isRequired,
  itemsWithTotals: PropTypes.array.isRequired,
  totalCost: PropTypes.number.isRequired,
  totalCostWithTax: PropTypes.number.isRequired
};

export default App;
