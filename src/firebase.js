import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
// require('dotenv').config()

const firebaseConfig = {
    apiKey: process.env.REACT_APP_RAPID_ID,
    authDomain: "transformer-9bdd5.firebaseapp.com",
    databaseURL: "https://transformer-9bdd5-default-rtdb.firebaseio.com",
    projectId: "transformer-9bdd5",
    storageBucket: "transformer-9bdd5.appspot.com",
    messagingSenderId: "399440959575",
    appId: process.env.REACT_APP_ID,
    measurementId: "G-EYFRCLZSF4"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)

 const Current = firebase.database().ref("Current")
 const Humidity = firebase.database().ref("Hum")
 const Oillevel = firebase.database().ref("Oillevel")
 const Temp = firebase.database().ref("Temp")
 const Voltage = firebase.database().ref("Voltage")


  const db={
    Current: Current,
    Humidity: Humidity,
    Oillevel : Oillevel,
    Temp : Temp,
    Voltage: Voltage
  }

  export default db;