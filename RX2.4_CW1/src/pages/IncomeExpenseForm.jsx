import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntry, addExpense } from '../actions';

const IncomeExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [entryType, setEntryType] = useState('income');
  const dispatch = useDispatch();

  // const initialEntry = {
  //   description: '',
  //   amount: '',
  //   entryType: '',
  // };

  // const [entry, setEntry] = useState(initialEntry);

  // const dispatch = useDispatch();

  // const handleAddEntry = (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     addEntry({
  //       description: entry.description,
  //       amount: parseFloat(entry.amount),
  //       entryType: entry.entryType,
  //     })
  //   );
  //   setEntry(initialEntry);
  // };

  const handleAddEntry = (e) => {
    e.preventDefault();
    console.log(entryType);

    if (entryType === 'income') {
      dispatch(
        addEntry({ description, amount: parseFloat(amount), entryType })
      );
    } else {
      dispatch(
        addExpense({ description, amount: parseFloat(amount), entryType })
      );
    }

    setDescription('');
    setAmount('');
    setEntryType('income');
  };
  return (
    <div>
      <h1>New Entry Page</h1>
      <form>
        <div>
          <label htmlFor="description">Description</label>
          <br />
          <input
            type="text"
            id="description"
            onChange={(event) => setDescription(event.target.value)}
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
            onChange={(event) => setAmount(event.target.value)}
            value={amount}
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
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <br />
        <button onClick={handleAddEntry}>Add Entry</button>
      </form>
    </div>
  );
};

export default IncomeExpenseForm;
