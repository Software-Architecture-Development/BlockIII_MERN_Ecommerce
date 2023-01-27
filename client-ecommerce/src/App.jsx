import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './components/Footer';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import { onMessageListener } from './firebase';
import Notifications from './Notification';
import ReactNotificationComponent from './ReactNotification';
import {BrowserRouter as Router, Route} from "react-router-dom";


const App = () => {
  return <ProductList/>
};

// function App() {
//   const [show, setShow] = useState(false);
//   const [notification, setNotification] = useState({ title: "", body: "" });

//   console.log(show, notification);

//   onMessageListener()
//     .then((payload) => {
//       setShow(true);
//       setNotification({
//         title: payload.notification.title,
//         body: payload.notification.body,
//       });
//       console.log(payload);
//     })
//     .catch((err) => console.log("failed: ", err));

//   return (
//     <div className="App">
//       {show ? (
//         <ReactNotificationComponent
//           title={notification.title}
//           body={notification.body}
//         />
//       ) : (
//         <></>
//       )}
//       <Notifications />
    
      
      
//     </div>
//   );
// }

export default App;
