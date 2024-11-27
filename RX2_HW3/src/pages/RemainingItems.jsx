import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchItems, fetchRemovedItems } from '../actions';
const RemainingItems = () => {
  const items = useSelector((state) => state.items);
  const removedItems = useSelector((state) => state.removedItems);

  const dispatch = useDispatch();

  const totalItems = items.reduce((acc, curr) => curr.itemQuantity + acc, 0);
  const totalRemovedItems = removedItems.reduce(
    (acc, curr) => curr.itemQuantity + acc,
    0
  );

  const totalRemainingItems = totalItems - totalRemovedItems;

  useEffect(() => {
    dispatch(fetchItems()), dispatch(fetchRemovedItems());
  }, []);

  return (
    <div>
      <h1>Remaining Items in Inventory</h1>
      <h2>Inventory Total: {totalRemainingItems}</h2>
    </div>
  );
};
export default RemainingItems;
