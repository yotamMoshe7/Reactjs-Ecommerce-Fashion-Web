import SHOP_DATA from './shop.data';

const INITIAT_STATE = {
  collections: SHOP_DATA
}

const shopReducer = (state = INITIAT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;