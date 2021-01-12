import Vue from "vue";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/performance";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBOC6QMNcc_3JFArrqWT1R0Wc31-9r5hU",
  authDomain: "dota-khotemal.firebaseapp.com",
  projectId: "dota-khotemal",
  storageBucket: "dota-khotemal.appspot.com",
  messagingSenderId: "686676246355",
  appId: "1:686676246355:web:b43874c17511d7c08e6ba6",
  measurementId: "G-CRD39M2S4F"
};

if (!process.env.FIREBASE_INITIALIZED_APP) {
  process.env.FIREBASE_INITIALIZED_APP = true;
  firebase.initializeApp(firebaseConfig);
  if (process.env.NODE_ENV === "production") {
    app.analytics();
    app.performance();
  }
}

Vue.prototype.$auth = firebase.auth;
Vue.prototype.$database = firebase.database;
Vue.prototype.$storage = firebase.storage;
Vue.prototype.$analytic = firebase.analytics;
