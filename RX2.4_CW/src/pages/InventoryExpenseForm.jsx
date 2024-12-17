import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntry } from '../actions';

const InventoryExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [entryType, setEntryType] = useState('income');
  const dispatch = useDispatch();

  const addEntryHandler = (e) => {
    e.preventDefault();
    console.log(description, amount, entryType);

    if (description && amount && entryType) {
      dispatch(
        addEntry({ description, amount: parseFloat(amount), entryType })
      );
    }

    setDescription('');
    setAmount('');
    setEntryType('income');
  };
  return (
    <>
      <h1>New Entry Page</h1>
      <form>
        <div>
          <label htmlFor="description">Description: </label>
          <br />
          <input
            type="text"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <br />
        <div>
          <label htmlFor="amount">Amount: </label>
          <br />
          <input
            type="number"
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
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
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <br />
        <button onClick={addEntryHandler}>Add Entry</button>
      </form>
    </>
  );
};

export default InventoryExpenseForm;
