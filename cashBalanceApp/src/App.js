import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw, addInterest, charge } from './container/balanceSlice';
import './App.css';

function App() {
  // Get dispatch function to send actions to the store
  const dispatch = useDispatch();
  // Get balance state from the store
  const balance = useSelector((state) => state.balance);
  // Use state to store the user input
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    // Dispatch deposit action with the parsed amount as payload
    dispatch(deposit(parseFloat(amount)));
  };

  const handleWithdraw = () => {
    // Dispatch withdraw action with the parsed amount as payload
    dispatch(withdraw(parseFloat(amount)));
  };

  const handleAddInterest = () => {
    // Dispatch addInterest action with the parsed amount as payload
    dispatch(addInterest(parseFloat(amount)));
  };

  const handleCharge = () => {
    // Dispatch charge action with the parsed amount as payload
    dispatch(charge(parseFloat(amount)));
  };

  return (
    <div>
      {/* Display the current balance */}
      <h1>Balance: ${balance.value}</h1>
      {/* Input for the user to enter amount */}
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      {/* Buttons to perform different actions */}
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={handleAddInterest}>Add Interest (5%)</button>
      <button onClick={handleCharge}>Charge (15%)</button>
    </div>
  );
}

export default App;

//used some of these sources for help with this task (nothing specifically taken):
// https://codesandbox.io/s/1l7c5
// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

