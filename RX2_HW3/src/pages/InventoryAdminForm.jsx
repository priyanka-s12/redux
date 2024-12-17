import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewItems } from '../actions';

const InventoryAdminForm = () => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [entryType, setEntryType] = useState('addToStorage');
  const dispatch = useDispatch();
  //check key name in backend and give it to html elements
  const addItemHandler = (e) => {
    e.preventDefault();

    if (itemName && itemQuantity && entryType) {
      // console.log(name, quantity, entryType);
      //dispatching action as function
      dispatch(addNewItems({ itemName, itemQuantity, entryType }));
    }

    setItemName('');
    setItemQuantity('');
    setEntryType('addToStorage');
  };

  return (
    <main>
      <h1>Inventory Admin App</h1>
      <form>
        <div>
          <label htmlFor="itemName">Item Name: </label>
          <br />
          <input
            type="text"
            id="itemName"
            onChange={(e) => setItemName(e.target.value)}
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
            onChange={(e) => setItemQuantity(e.target.value)}
            value={itemQuantity}
          />
        </div>
        <br />
        <div>
          <label htmlFor="entryType">Entry Type: </label>
          <br />
          <select
            id="entryType"
            onChange={(e) => setEntryType(e.target.value)}
            value={entryType}
          >
            <option value="addToStorage">Add to Storage</option>
            <option value="removeFromStorage">Remove from Storage</option>
          </select>
        </div>
        <br />
        <div>
          <button onClick={addItemHandler}>Add Item Data</button>
        </div>
      </form>
    </main>
  );
};

export default InventoryAdminForm;
