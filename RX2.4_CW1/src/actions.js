//add entry in db so async and try catch block

// export const addEntry = (entry) => async (dispatch) => {
//   try {
//     const url =
//       entry.entryType === 'income'
//         ? 'https://finance-app-backend-student-neog.replit.app/add-income'
//         : 'https://finance-app-backend-student-neog.replit.app/add-expense';
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(entry),
//     });

//     const data = await response.json();
//     if (data.success) {
//       dispatch({ type: 'ADD_ENTRY_SUCCESS', payload: data.data });
//     }
//   } catch (error) {
//     console.error('Error adding entry:', error);
//   }
// };

export const addEntry = (entry) => async (dispatch) => {
  console.log(entry);
  try {
    const response = await fetch(
      'https://finance-app-backend-Student-neoG.replit.app/add-income',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify(entry),
      }
    );
    const data = await response.json();
    if (data.success === true) {
      console.log(data);
      dispatch({ type: 'ADD_ENTRY_SUCCESS', payload: data.data });
    }
  } catch (error) {
    console.error('Erron adding entry', error);
  }
};

export const addExpense = (entry) => async (dispatch) => {
  console.log(entry);
  try {
    const response = await fetch(
      'https://finance-app-backend-Student-neoG.replit.app/add-expense',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify(entry),
      }
    );
    const data = await response.json();
    if (data.success === true) {
      console.log(data);
      dispatch({ type: 'ADD_ENTRY_SUCCESS', payload: data.data });
    }
  } catch (error) {
    console.error('Erron adding entry', error);
  }
};

export const fetchIncome = () => async (dispatch) => {
  try {
    const response = await fetch(
      'https://finance-app-backend-Student-neoG.replit.app/income'
    );
    const data = await response.json();
    if (data) {
      dispatch({ type: 'FETCH_INCOME_SUCCESS', payload: data });
    }
  } catch (error) {
    console.log('Error fetching income', error);
  }
};

export const fetchExpense = () => async (dispatch) => {
  try {
    const response = await fetch(
      'https://finance-app-backend-Student-neoG.replit.app/expenses'
    );
    const data = await response.json();
    if (data) {
      dispatch({ type: 'FETCH_EXPENSE_SUCCESS', payload: data });
    }
  } catch (error) {
    console.log('Error fetching expenses', error);
  }
};
