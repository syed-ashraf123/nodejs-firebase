const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyBN0Ej4ge3rEiIKe04SCC4MAgWtKBnqwb4",
  authDomain: "security-266e5.firebaseapp.com",
  databaseURL: "https://security-266e5.firebaseio.com",
  projectId: "security-266e5",
  storageBucket: "security-266e5.appspot.com",
  messagingSenderId: "597325357058",
  appId: "1:597325357058:web:c0919ec2bc99f47b9c871b",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Users = db.collection("users");
module.exports = Users;
