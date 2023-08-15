import './App.css';
import logo from './logo.svg';


function App() {
  return (
    <div className="main-wrapp">
     <div className='main-fixed'>
        <div className='main-sidebar element'>
            sidebar
        </div>
        <div className='main-navbar element'>
            navbar
        </div>
        <div className='main-contacts element'>
            contacts
        </div>
      </div>
      <div className='main-home element'>
        home
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
