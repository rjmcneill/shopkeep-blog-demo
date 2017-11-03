import DATA from '../enums';

const initialState = {
  data: [],
  taxRate: 1
};

function listReducer(state = initialState, action) {
  switch (action.type) {
  case DATA.GENERATE: {
    const { data } = action;
    return Object.assign({}, state, {
      data
    });
  }
  case DATA.UPDATE_TAX_RATE: {
    const { taxRate } = action;
    return Object.assign({}, state, {
      taxRate
    });
  }
  default:
    return state;
  }
}

export default listReducer;
