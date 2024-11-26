import { useSelector, useDispatch } from 'react-redux';
import { fetchExpense, fetchIncome } from '../actions';
import { useEffect } from 'react';

const Savings = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);
  const expenses = useSelector((state) => state.expenses);

  const totalIncome = income.reduce((acc, curr) => curr.amount + acc, 0);
  const totalExpense = expenses.reduce((acc, curr) => curr.amount + acc, 0);

  const totalSavings = totalIncome - totalExpense;

  //fetch income from backend on pagload
  useEffect(() => {
    dispatch(fetchIncome());
  }, []);

  useEffect(() => {
    dispatch(fetchExpense());
  }, []);

  //  useEffect(() => {
  //    dispatch(fetchIncome());
  //    dispatch(fetchExpenses());
  //  }, []);

  return (
    <div>
      <h1>Savings Page</h1>
      <h2>Total Savings: $ {totalSavings}</h2>
    </div>
  );
};
export default Savings;
