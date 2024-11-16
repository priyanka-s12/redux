import { ADD_TO_CART, REMOVE_FROM_CART, CALCULATE_TOTAL } from './actions';
const initialState = { cartItems: [], total: 0 };

const cartReducer = (state = initialState, action) => {
  //   console.log(state);
  //spread the object to copy all properties of product
  //find() => first time return undefined if item not found, findIndex() returns -1 means item not found
  switch (action.type) {
    // case "cart/added":
    case ADD_TO_CART:
      const existingItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      console.log(existingItem);

      if (existingItem >= 0) {
        const updated = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cartItems: updated };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    // case "cart/removed":
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload),
        ],
      };

    // case "cart/calculateTotal":
    case CALCULATE_TOTAL:
      const total = state.cartItems.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
      return { ...state, total };

    default:
      return state;
  }
};

export default cartReducer;
