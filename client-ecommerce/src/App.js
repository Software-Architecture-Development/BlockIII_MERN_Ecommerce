import Home from './pages/Home';
import {createBrowserRouter,RouterProvider,
  Route,
  Link,} from "react-router-dom";



const App = () => {
    const user = useSelector((state) => state.user.currentUser);
  return (
    
      <div className="App">
       <Route path="/" element={<Home />}>
        </Route>
      </div>
    
  );
}

export default App;
