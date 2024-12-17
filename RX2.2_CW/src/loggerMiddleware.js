const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Current state: ', store.getState());
  console.log('Action: ', action);
  next(action);
  console.log('Next state: ', store.getState());
};
export default loggerMiddleware;
