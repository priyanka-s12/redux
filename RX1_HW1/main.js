import cartReducer from './cartReducer';
import { createStore } from 'redux';
import { addToCart, removeFromCart, calculateTotal } from './actions';

const store = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
const cartItemsList = document.querySelector('#cartItemsList');
const total = document.querySelector('#total');

window.addToCartHandler = (productId) => {
  const product = products.find((product) => product.id === productId);
  //   console.log(product);
  //   store.dispatch({
  //     type: "cart/added",
  //     payload: product,
  //   });
  //   store.dispatch({ type: "cart/calculateTotal" });
  if (product) {
    store.dispatch(addToCart(product));
    store.dispatch(calculateTotal());
  }
};

window.removeFromCartHandler = (productId) => {
  //   store.dispatch({ type: "cart/removed", payload: productId });
  //   store.dispatch({ type: "cart/calculateTotal" });
  store.dispatch(removeFromCart(productId));
  store.dispatch(calculateTotal());
};

const renderProducts = () => {
  productList.innerHTML = products
    .map(
      (product) =>
        `<li>${product.name} - Rs. ${product.price} <button onClick="addToCartHandler(${product.id})">Add to cart</button></li>`
    )
    .join('');
};

renderProducts();

const updateCart = () => {
  const state = store.getState();
  console.log(state);
  cartItemsList.innerHTML = state.cartItems
    .map(
      (item) =>
        `<li>${item.name} - Rs ${item.price} - Quantity: ${item.quantity} <button onClick = "removeFromCartHandler(${item.id})">Remove</button></li>`
    )
    .join('');

  total.textContent = `Total: Rs ${state.total}`;
};

updateCart();

// store.dispatch({
//   type: "cart/added",
//   payload: { id: 1, name: "Product A", price: 10 },
// });
// console.log(store.getState());

// store.dispatch({
//   type: "cart/added",
//   payload: { id: 2, name: "Product B", price: 20 },
// });
// console.log(store.getState());

// store.dispatch({
//   type: "cart/added",
//   payload: { id: 1, name: "Product A", price: 10 },
// });
// console.log(store.getState());

// store.dispatch(addToCart({ id: 1, name: 'Product A', price: 10 }));
// store.dispatch(calculateTotal());
// store.dispatch(addToCart({ id: 2, name: 'Product B', price: 20 }));
// store.dispatch(calculateTotal());
// store.dispatch(addToCart({ id: 1, name: 'Product A', price: 10 }));
// store.dispatch(calculateTotal());
// store.dispatch(removeFromCart(1));
// store.dispatch(calculateTotal());
