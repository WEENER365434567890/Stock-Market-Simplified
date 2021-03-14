// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCBPirQl_5h2iVk1rBuJ5bOme7ZZK-W8lY",
  authDomain: "stock-market-simplified.firebaseapp.com",
  projectId: "stock-market-simplified",
  storageBucket: "stock-market-simplified.appspot.com",
  messagingSenderId: "59444933091",
  appId: "1:59444933091:web:c33c1d0c8a7be5a68030d6",
  measurementId: "G-DDT4CWYHZF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
//intializing firebase app

const db = firebaseApp.firestore();
//intialized database
const auth = firebase.auth();

export { db, auth };
