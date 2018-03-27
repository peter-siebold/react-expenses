import * as firebase from "firebase";

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
