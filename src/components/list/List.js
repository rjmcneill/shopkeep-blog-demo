import React from 'react';
import PropTypes from 'prop-types';
import './stylesheets/index.scss';

const List = ({ data }) => {
  const listItems = data.map(item => (
    <li key={item.uuid}>
      <span className="list-item-span">INDEX: {item.index}</span>
      <span className="list-item-span">PRICE: {item.price}</span>
      <span className="list-item-span">QUANTITY: {item.quantity}</span>
      <span className="list-item-span">TOTAL: {item.total}</span>
    </li>
  ));

  return (
    <div>
      {listItems}
    </div>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired
};

export default List;
