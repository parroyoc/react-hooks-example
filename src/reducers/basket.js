import {useReducer} from "react";

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

function basketReducerFactory(){
  const [basketItems, dispatchBasket] = useReducer(basketReducer, []);

  // NOTE: THESE ACTIONS NEED DISPATCH, SO THE ACTION CREATORS MUST BE DECLARED HERE
  const addItem = (item) => dispatchBasket({ type: ADD_ITEM, item });
  const removeItem = (index) => dispatchBasket({ type: REMOVE_ITEM, index });

  return {
    basketItems,
    basketActions: {
      addItem,
      removeItem
    }
  }
}

export default basketReducerFactory;
export {
  ADD_ITEM,
  REMOVE_ITEM
};