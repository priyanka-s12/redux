import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItems } from '../actions';
const InventoryForm = () => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [entryType, setEntryType] = useState('addToStorage');
  const dispatch = useDispatch();

  const addHandler = (event) => {
    event.preventDefault();
    console.log(entryType, itemName, itemQuantity);

    if (itemName && itemQuantity && entryType) {
      if (entryType === 'addToStorage') {
        dispatch(addItems({ itemName, itemQuantity, entryType }));
      } else {
        dispatch(addItems({ itemName, itemQuantity, entryType }));
      }
    }

    setItemName('');
    setItemQuantity('');
    setEntryType('addToStorage');
  };
  return (
    <div>
      <h1>Inventory Admin App</h1>
      <form>
        <div>
          <label htmlFor="itemName">Item Name: </label>
          <br />
          <input
            type="text"
            id="itemName"
            onChange={(event) => setItemName(event.target.value)}
            value={itemName}
          />
        </div>
        <br />
        <div>
          <label htmlFor="itemQuantity">Item Quantity: </label>
          <br />
          <input
            type="number"
            id="itemQuantity"
            onChange={(event) => setItemQuantity(event.target.value)}
            value={itemQuantity}
          />
        </div>
        <br />
        <div>
          <label htmlFor="entryType">Entry Type: </label>
          <br />
          <select
            id="entryType"
            onChange={(event) => setEntryType(event.target.value)}
            value={entryType}
          >
            <option value="addToStorage">Add to Storage</option>
            <option value="removeFromStorage">Remove from Storage</option>
          </select>
        </div>
        <br />
        <div>
          <button onClick={addHandler}>Add Item Data</button>
        </div>
      </form>
    </div>
  );
};
export default InventoryForm;
