//thunk action creator
export const fetchItems = () => async (dispatch) => {
  try {
    const apiUrl =
      'https://inventory-storage-app-backend-student-neog.replit.app/storage-items';

    const response = await fetch(apiUrl);

    //used to forget await here
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
    const apiUrl =
      'https://inventory-storage-app-backend-student-neog.replit.app/dispatched-from-store';

    const response = await fetch(apiUrl);

    const data = await response.json();
    // console.log(data);
    if (data) {
      dispatch({ type: 'FETCH_REMOVED_ITEMS', payload: data });
    }
  } catch (error) {
    console.log('Error in fetching removed items', error);
  }
};

export const addNewItems = (entry) => async (dispatch) => {
  //   console.log(entry);
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
    // console.log(data);
    if (data.success === true) {
      dispatch({ type: 'ADD_NEW_ITEM', payload: data.data });
    }
  } catch (error) {
    console.log('Error occurred in adding entry', error);
  }
};
