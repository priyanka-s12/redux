// action types
// export const FETCH_ITEMS = 'FETCH_ITEMS';
// export const ADD_ITEMS = 'ADD_ITEMS';
// export const FETCH_REMOVED_ITEMS = 'FETCH_REMOVED_ITEMS';
// export const FETCH_REMAINING_ITEMS = 'FETCH_REMAINING_ITEMS';

//thunk action creaters
//want to dispatch some functionality
export const addItems = (entry) => async (dispatch) => {
  console.log(entry);
  try {
    const apiUrl =
      entry.entryType === 'addToStorage'
        ? 'https://inventory-storage-app-backend-student-neog.replit.app/add-to-store'
        : 'https://inventory-storage-app-backend-student-neog.replit.app/remove-from-store';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });

    const data = await response.json();
    if (data.success) {
      dispatch({ type: 'ADD_ITEMS', payload: data.data });
      //   console.log(data);
    }
  } catch (error) {
    console.log('Error in adding entry', error);
  }
};

export const fetchItems = () => async (dispatch) => {
  try {
    const response = await fetch(
      'https://inventory-storage-app-backend-student-neog.replit.app/storage-items'
    );
    //forgot to add await in response.json - so items.map() is not function error in Inventory page - if you forgot await here, hover on data will take it as promise
    const data = await response.json();
    // console.log(data);
    if (data) {
      dispatch({ type: 'FETCH_ITEMS', payload: data });
    }
  } catch (error) {
    console.log('Error in fetching items', error);
  }
};

export const fetchRemovedItems = () => async (dispatch) => {
  try {
    const response = await fetch(
      'https://inventory-storage-app-backend-student-neog.replit.app/dispatched-from-store'
    );

    const data = await response.json();
    if (data) {
      dispatch({ type: 'FETCH_REMOVED_ITEMS', payload: data });
    }
  } catch (error) {
    console.log('Error in fetching removed items', error);
  }
};
