// import {
//   FETCH_ITEMS,
//   ADD_ITEMS,
//   FETCH_REMOVED_ITEMS,
//   FETCH_REMAINING_ITEMS,
// } from './actions';

const initialState = {
  items: [],
  removedItems: [],
  remainingItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS':
      return { ...state, items: action.payload };
    case 'ADD_ITEMS':
      if (action.payload.entryType === 'addToStorage') {
        return { ...state, items: [...state.items, action.payload] };
      } else {
        return {
          ...state,
          removedItems: [...state.removedItems, action.payload],
        };
      }
    case 'FETCH_REMOVED_ITEMS':
      return { ...state, removedItems: action.payload };
    case 'FETCH_REMAINING_ITEMS':
      return { ...state, remainingItems: action.payload };
    default:
      return state;
  }
};
export default reducer;
