import firebase from 'firebase';
require('@firebase/firestore');


const firebaseConfig = {
  apiKey: "AIzaSyC_vihNXC4bYsgP1PDmj1ZO5w4GIqubJCk",
  authDomain: "health-app-2-0.firebaseapp.com",
  projectId: "health-app-2-0",
  storageBucket: "health-app-2-0.appspot.com",
  messagingSenderId: "766992141268",
  appId: "1:766992141268:web:aac124a9c32481063ba441"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
