import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIncome, addExpense } from './actions';

const IncomeExpenseForm = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const handleAddIncome = () => {
    dispatch(addIncome(parseFloat(amount)));
    setAmount(0);
  };
  const handleAddExpense = () => {
    dispatch(addExpense(parseFloat(amount)));
    setAmount(0);
  };
  return (
    <>
      <div>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button onClick={handleAddIncome}>Add Income</button>
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
    </>
  );
};
export default IncomeExpenseForm;
