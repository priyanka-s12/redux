import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchItems } from '../actions';

const Inventory = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const totalItems = items.reduce((acc, curr) => curr.itemQuantity + acc, 0);
  //   console.log(items);
  return (
    <div>
      <h1>Inventory Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.itemName} : {item.itemQuantity}
          </li>
        ))}
      </ul>

      <h2>Total Inventory Items: {totalItems}</h2>
    </div>
  );
};
export default Inventory;
