import Home from './pages/Home';
import {createBrowserRouter,RouterProvider,
  Route,
  Link,} from "react-router-dom";



function App() {
  return (
    
      <div className="App">
       <Route path="/" element={<Home />}>
        </Route>
      </div>
    
  );
}

export default App;
