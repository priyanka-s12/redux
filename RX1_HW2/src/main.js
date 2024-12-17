import { createStore } from 'redux';
import profileReducer from './profileReducer';
// import { ADD_PROFILE, REMOVE_PROFILE, CALCULATE_AVERAGE_AGE } from './actions';
import { addProfile, removeProfile, calculateAverageAge } from './actions';

const store = createStore(
  profileReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// const profiles = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Charlie', age: 35 },
// ];

const profileId = document.querySelector('#profileId');
const profileName = document.querySelector('#profileName');
const profileAge = document.querySelector('#profileAge');
const addProfileBtn = document.querySelector('#addProfile');

const removeProfileId = document.querySelector('#removeProfileId');
const removeProfileBtn = document.querySelector('#removeProfile');

const profileList = document.querySelector('#profileList');
const avgAge = document.querySelector('#avgAge');

store.subscribe(() => {
  console.log(store.getState());
  renderProfiles();
  updateAverageAge();
});

const addProfileHandler = (event) => {
  event.preventDefault();
  const profile = {
    id: Number(profileId.value),
    name: profileName.value,
    age: Number(profileAge.value),
  };

  const { id, name, age } = profile;
  if (id && name && age) {
    store.dispatch(addProfile(profile));
    store.dispatch(calculateAverageAge());
  }
};

const removeProfileHandler = () => {
  const id = Number(removeProfileId.value);
  store.dispatch(removeProfile(id));
  store.dispatch(calculateAverageAge());
};

addProfileBtn.addEventListener('click', addProfileHandler);
removeProfileBtn.addEventListener('click', removeProfileHandler);

const renderProfiles = () => {
  const state = store.getState();
  profileList.innerHTML = state.profiles
    .map(
      (profile) =>
        `<li>${profile.id}. ${profile.name} (${profile.age} years old) </li>`
    )
    .join('');
};

const updateAverageAge = () => {
  // const state = store.getState();
  const { averageAge } = store.getState();
  avgAge.textContent = `Average age: ${averageAge}`;
};

// store.dispatch({
//   type: ADD_PROFILE,
//   payload: { id: 1, name: 'Alice', age: 25 },
// });
// store.dispatch({ type: CALCULATE_AVERAGE_AGE });
// store.dispatch({
//   type: ADD_PROFILE,
//   payload: { id: 2, name: 'Bob', age: 30 },
// });
// store.dispatch({ type: CALCULATE_AVERAGE_AGE });
// store.dispatch({ type: REMOVE_PROFILE, payload: 1 });
// store.dispatch({ type: CALCULATE_AVERAGE_AGE });
// store.dispatch({ type: REMOVE_PROFILE, payload: 2 });
// store.dispatch({ type: CALCULATE_AVERAGE_AGE });
