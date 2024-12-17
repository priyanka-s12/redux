import { useDispatch, useSelector } from 'react-redux';
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleClick = (type) => {
    dispatch({ type });
  };
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={(e) => handleClick('add')}>Add</button>
      <button onClick={(e) => handleClick('minus')}>Minus</button>
    </>
  );
}

export default App;
