import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
export const firebaseConfig = {
    //DOC Firebase
    apiKey: "AIzaSyDZWiBsbQrFUScFGAxVtako2J80XQt29XQ",
    authDomain: "ecopointer-44110.firebaseapp.com",
    projectId: "ecopointer-44110",
    storageBucket: "ecopointer-44110.appspot.com",
    messagingSenderId: "689771239250",
    appId: "1:689771239250:web:dba20a9d3ab91745738c8b",
    measurementId: "G-YCP4VKBMEV"

    //Example
    // apiKey: 'AIzaSyDZWiBsbQrFUScFGAxVtako2J80XQt29XQ',
    // authDomain: 'project-id.firebaseapp.com',
    // databaseURL: 'https://project-id.firebaseio.com',
    // projectId: 'ecopointer-44110',
    // storageBucket: 'project-id.appspot.com',
    // messagingSenderId: 'sender-id',
    // appId: '1:689771239250:web:dba20a9d3ab91745738c8b',
    // measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
