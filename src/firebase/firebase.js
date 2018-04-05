import * as firebase from "firebase";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}


firebase.initializeApp(config);

const database = firebase.database();

export {
    firebase,
    database as default
}

//   database.ref().set({
//       name : "Arthur Dent",
//       age: 30,
//       isSingle: true,
//       location: {
//           city: "Islington",
//           country: "United Kingdom"
//       }
//   });

//   database.ref("age").set(35);
//   database.ref("location/country").set("Ursa Minor");
//   database.ref("attributes/height").set({
//       height: 175,
//       weight: 80
//   });
//   database.ref("attributes/height").set(180);
//   database.ref("attributes/weight").set(80);
