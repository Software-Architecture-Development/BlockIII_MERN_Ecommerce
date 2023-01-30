import logo from './logo.svg';
import './App.css';

const App = () => {
    const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      React App working successfully in browser
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;