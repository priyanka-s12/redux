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
  updateAverageAge();
});

const addProfileHandler = (event) => {
  event.preventDefault();
  const id = Number(profileId.value);
  const name = profileName.value;
  const age = Number(profileAge.value);
  // console.log(id, name, age);
  const profile = { id, name, age };
  // console.log(profile);
  if (profile.id && profile.name && profile.age) {
    store.dispatch(addProfile(profile));
    store.dispatch(calculateAverageAge());
    renderProfiles();
    updateAverageAge();
  }

  // const profile = {
  //   id: Number(profileId.value),
  //   name: profileName.value,
  //   age: Number(profileAge.value),
  // };

  // const { id, name, age } = profile;
  // if (id && name && age) {
  //   store.dispatch(addProfile(profile));
  //   store.dispatch(calculateAverageAge());
  // }
};

const removeProfileHandler = () => {
  const profileId = removeProfileId.value;
  // console.log(profileId);
  const state = store.getState();
  const findProfile = state.profiles.find((profile) => profile.id == profileId);
  // console.log(findProfile);
  if (findProfile) {
    store.dispatch(removeProfile(profileId));
    store.dispatch(calculateAverageAge());
  }
  // else {
  // avgAge.textContent = 'No profile found.';
  // avgAge.style.color = 'red';
  // }

  renderProfiles();
  updateAverageAge();

  //  const id = Number(removeProfileId.value);
  // store.dispatch(removeProfile(id));
  // store.dispatch(calculateAverageAge());
};
addProfileBtn.addEventListener('click', addProfileHandler);
removeProfileBtn.addEventListener('click', removeProfileHandler);

const renderProfiles = () => {
  const state = store.getState();
  profileList.innerHTML = state.profiles
    .map(
      (profile) =>
        `<li>${profile.id}. ${profile.name} (${profile.age} years old)</li>`
    )
    .join('');
};

const updateAverageAge = () => {
  const state = store.getState();
  avgAge.textContent = `Average Age: ${state.averageAge}`;
  // avgAge.style.color = 'green';
};

// renderProfiles();
// updateAverageAge();

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
// store.dispatch({ type: REMOVE_PROFILE, payload: { profileId: 2 } });
// store.dispatch({ type: CALCULATE_AVERAGE_AGE });
// console.log(store.getState());

// store.dispatch(addProfile({ id: 4, name: 'David', age: 40 }));
// store.dispatch(calculateAverageAge());
// store.dispatch(addProfile({ id: 5, name: 'John', age: 45 }));
// store.dispatch(calculateAverageAge());
// store.dispatch(removeProfile({ profileId: 5 }));
// store.dispatch(calculateAverageAge());
