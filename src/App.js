import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <div className="bg-secondary-text-white text-center p-2 " >
        <table className="table table-striped table-bordered">
          <input
            type="text"
            className="form-control"
            placeholder="Name on Card"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Card Number"
          />
          <div className="float-right">
            <input
              type="text"
              className="form-control w-26"
              placeholder="Valid throught"
            />
          </div>
          <div className="float-left">
            <input
              type="text"
              className="form-control w-26"
              placeholder="CVV"
              maxLength="16"
            />
          </div>

        </table>
      </div>
      <button className="btn btn-primary mt-1">
        Pay
         </button>
    </div >
  );
}

export default App;
