import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD00OQrbQEgLlf7DgOJhwKXj_Ff20KwTWo",
  authDomain: "namaste-2a7ee.firebaseapp.com",
  projectId: "namaste-2a7ee",
  storageBucket: "namaste-2a7ee.appspot.com",
  messagingSenderId: "985513825477",
  appId: "1:985513825477:web:7103cd6fdb339c7eec8cac",
  measurementId: "G-LPJL7K3P56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// // const analytics = getAnalytics(app);

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// const { REACT_APP_VAPID_KEY } = `BFmgBD3UdC43PtjOO_QylV_GC6v_FymijSFTT7YbbwkoOEh4issbgAuI00ZCKamxssQRfyE6dXnwIrW-KWh5k8c`;
// const publicKey = REACT_APP_VAPID_KEY;

// export const getToken = async (setTokenFound) => {
//   let currentToken = "";

//   try {
//     currentToken = await messaging.getToken({ vapidKey: publicKey });
//     if (currentToken) {
//       setTokenFound(true);
//     } else {
//       setTokenFound(false);
//     }
//   } catch (error) {
//     console.log("An error occurred while retrieving token. ", error);
//   }

//   return currentToken;
// };

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     messaging.onMessage((payload) => {
//       resolve(payload);
//     });
//   });