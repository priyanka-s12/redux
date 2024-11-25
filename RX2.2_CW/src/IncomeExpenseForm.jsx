import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIncome, addExpense } from './actions';

const IncomeExpenseForm = () => {
  //to reset the amount field use state var
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const handleAddIncome = () => {
    // dispatch({ type: 'ADD_INCOME', payload: parseFloat(amount) });
    dispatch(addIncome(parseFloat(amount)));
    setAmount(0);
  };
  const handleAddExpense = () => {
    // dispatch({ type: 'ADD_EXPENSES', payload: parseFloat(amount) });
    dispatch(addExpense(parseFloat(amount)));
    setAmount(0);
  };
  return (
    <div>
      <input
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <button onClick={handleAddIncome}>Add Income</button>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default IncomeExpenseForm;
