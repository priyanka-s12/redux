import { useSelector, useDispatch } from 'react-redux';
import { fetchRemovedItems } from '../actions';
import { useEffect } from 'react';
const RemovedItems = () => {
  const removedItems = useSelector((state) => state.removedItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRemovedItems());
  }, []);

  const totalRemovedItems = removedItems.reduce(
    (acc, curr) => curr.itemQuantity + acc,
    0
  );
  //   console.log(removedItems);
  return (
    <div>
      <h1>Removed Items From Inventory</h1>
      <ul>
        {removedItems.map((item, index) => (
          <li key={index}>
            {item.itemName}: {item.itemQuantity}
          </li>
        ))}
      </ul>
      <h2>Removed Items: {totalRemovedItems}</h2>
    </div>
  );
};
export default RemovedItems;
