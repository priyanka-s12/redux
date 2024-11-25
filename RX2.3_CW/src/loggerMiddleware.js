//next() controlling the flow of dispatched action through middleware chain which ultimately reach to reducer means allow to proceed to next middleware chain/ reducer
//if not used, action may be blocked and not reach to reducer
//keep tracks data such as state and action
const loggerMiddleware = (store) => (next) => (action) => {
  //logging different states
  console.log('Current state: ', store.getState());
  console.log('Action: ', action);
  next(action);
  //dispatches action
  console.log('Updated/ New State: ', store.getState());
};

export default loggerMiddleware;
