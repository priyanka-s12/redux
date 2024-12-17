const initialState = {
  items: [],
  removedItems: [],
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS':
      return { ...state, items: action.payload };
    case 'FETCH_REMOVED_ITEMS':
      return { ...state, removedItems: action.payload };
    case 'ADD_NEW_ITEM':
      if (action.payload.entryType === 'addToStorage') {
        return { ...state, items: [...state.items, { ...action.payload }] };
      } else {
        return {
          ...state,
          removedItems: [...state.removedItems, { ...action.payload }],
        };
      }
    default:
      return state;
  }
};

export default inventoryReducer;
