import MessengerCustomerChat from 'react-messenger-customer-chat';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Md Shad Khan
        </p>
      </header>
      <MessengerCustomerChat
    pageId="303145110363699"
    appId="704201240584906"
  />
    </div>
  );
}

export default App;
