// Import the necessary module
import { configureStore } from '@reduxjs/toolkit';

// Import the balance reducer
import balanceReducer from '../container/balanceSlice';

// Create the store with balance reducer as the root reducer
const store = configureStore({
reducer: {
balance: balanceReducer,
},
});

// Export the created store as default
export default store;