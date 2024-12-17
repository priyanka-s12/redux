import { createStore } from 'redux';
import cartReducer from './cartReducer';
// import { ADD_TO_CART, REMOVE_FROM_CART, CALCULATE_TOTAL } from './actions';
import { addToCart, removeFromCart, calculateTotal } from './actions';

const store = createStore(cartReducer);

store.subscribe(() => {
  console.log(store.getState());
  updateCart();
});

const products = [
  { id: 1, name: 'Product A', price: 10 },
  { id: 2, name: 'Product B', price: 20 },
  { id: 3, name: 'Product C', price: 15 },
];

const productList = document.querySelector('#productList');
const cartList = document.querySelector('#cartList');
const total = document.querySelector('#total');

window.addToCartHandler = (productId) => {
  const product = products.find((product) => product.id == productId);
  if (product) {
    store.dispatch(addToCart(product));
    store.dispatch(calculateTotal());
  }
};

window.removeFromCartHandler = (productId) => {
  store.dispatch(removeFromCart(productId));
  store.dispatch(calculateTotal());
};

const renderProducts = () => {
  productList.innerHTML = products
    .map((product) => {
      return `<li>${product.name} - Rs ${product.price} <button onClick="addToCartHandler(${product.id})">Add to Cart</button></li>`;
    })
    .join('');
};
renderProducts();

const updateCart = () => {
  const state = store.getState();
  console.log(state);
  cartList.innerHTML = state.cartItems
    .map((item) => {
      return `<li>${item.name} - Rs. ${item.price} - Quantity: ${item.quantity} <button onClick="removeFromCartHandler(${item.id})">Remove</button></li>`;
    })
    .join('');
  total.textContent = `Total: Rs. ${state.total}`;
};

updateCart();

// store.dispatch({
//   type: ADD_TO_CART,
//   payload: { id: 1, name: 'Product A', price: 10 },
// });
// store.dispatch({
//   type: ADD_TO_CART,
//   payload: { id: 1, name: 'Product A', price: 10 },
// });
// store.dispatch({
//   type: ADD_TO_CART,
//   payload: { id: 2, name: 'Product B', price: 20 },
// });
// store.dispatch({
//   type: ADD_TO_CART,
//   payload: { id: 3, name: 'Product C', price: 15 },
// });
// store.dispatch({ type: REMOVE_FROM_CART, payload: 3 });
// store.dispatch({ type: CALCULATE_TOTAL });
