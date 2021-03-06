import { createStore, combineReducers, compose } from "redux";
// import firebase from "firebase";
import "firebase/firestore";

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
//Reducers
import notifyReducer from "./reducers/notifyReducer";
import settingsReducer from "./reducers/settingsReducer";

const firebaseConfig = {
  apiKey: "AIzaSyCHacVzGXswI1eOqe_NNlrBbKAtSVFkqK0",
  authDomain: "reactclientpanel-ec447.firebaseapp.com",
  databaseURL: "https://reactclientpanel-ec447.firebaseio.com",
  projectId: "reactclientpanel-ec447",
  storageBucket: "reactclientpanel-ec447.appspot.com",
  messagingSenderId: "705784912381",
  appId: "1:705784912381:web:0c5dc2db7bf1dc70"
};

//react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

//Init firebase
firebase.initializeApp(firebaseConfig);
//Init firestore
// const firestore = firebase.firestore();
// const settings= {timestampsInSnapshots: true};
// firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer
});

//Check for settings in localStorage
if(localStorage.getItem('settings') == null) {
  //Default settings
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
  }

  //Set to localStorage
  localStorage.setItem('setting', JSON.stringify(defaultSettings));
}
//Create initial state
const initialState = {settings: JSON.parse(localStorage.getItem('settings'))};

//create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
