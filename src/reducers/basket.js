
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

const basketReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return [...state, action.item];
    }
    case REMOVE_ITEM: {
      const newBasketItems = [...state];
      newBasketItems.splice(action.index, 1);
      return newBasketItems;
    }
    default: return state;
  }
};

export default basketReducer;
export {
  ADD_ITEM,
  REMOVE_ITEM
};