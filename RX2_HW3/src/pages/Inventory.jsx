import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../actions';
import { useEffect } from 'react';

const Inventory = () => {
  const items = useSelector((state) => state.items);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const totalItems = items.reduce((acc, curr) => acc + curr.itemQuantity, 0);

  return (
    <div>
      <h1>Inventory Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.itemName}: {item.itemQuantity}
          </li>
        ))}
      </ul>
      <h2>Total Inventry Items: {totalItems}</h2>
    </div>
  );
};

export default Inventory;
