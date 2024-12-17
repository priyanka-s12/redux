import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRemovedItems } from '../actions';
const RemovedItems = () => {
  const removedItems = useSelector((state) => state.removedItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRemovedItems());
  }, []);
  //   console.log(removedItems);

  const totalRemovedItems = removedItems.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0
  );
  return (
    <div>
      <h1>Removed Items From Inventory</h1>
      <ul>
        {removedItems.map((item, index) => (
          <li key={index}>
            {item.itemName} - {item.itemQuantity}
          </li>
        ))}
      </ul>
      <h2>Total Removed Items: {totalRemovedItems}</h2>
    </div>
  );
};

export default RemovedItems;
