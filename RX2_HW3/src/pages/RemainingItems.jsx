import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchItems, fetchRemovedItems } from '../actions';
const RemainingItems = () => {
  const items = useSelector((state) => state.items);
  const removedItems = useSelector((state) => state.removedItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems(), dispatch(fetchRemovedItems()));
  }, []);

  const totalItems = items.reduce((acc, curr) => acc + curr.itemQuantity, 0);
  const totalRemovedItems = removedItems.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0
  );
  const remainingItems = totalItems - totalRemovedItems;
  return (
    <div>
      <h1>Remaining Items in Inventory</h1>
      <h2>Inventory Total: {remainingItems}</h2>
    </div>
  );
};
export default RemainingItems;
