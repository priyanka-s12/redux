import { useSelector, useDispatch } from 'react-redux';

//loggerMiddleware - piece of code sits between two components of app, allows communication and management of between components, extending the capabilities of store between dispatching action and reacting to store
//when action dispatch, first passes to middleware chain, middleware stop the action that reaching to reducer
function App() {
  //get initial value of counter
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  //hook to dispatch a type/action to store- useDispatch
  //hook to get a state = useSelector
  const handleClick = (type) => {
    dispatch({ type });
  };
  return (
    <main>
      <div>Counter: {counter}</div>
      <button onClick={(event) => handleClick('add')}>Add</button>
      <button onClick={(event) => handleClick('minus')}>Minus</button>
    </main>
  );
}

export default App;
