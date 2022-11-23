import React from 'react';
import ReactDOM from 'react-dom/client';
import { InputForm } from './components/inputform';
import { RefreshPage } from './components/refreshpage';
import './index.css';


const App = () => {
 
  return(
    <div className="main">
      <h1 className="banner">Weather forecast API testing</h1>
      <InputForm />
      <RefreshPage />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

