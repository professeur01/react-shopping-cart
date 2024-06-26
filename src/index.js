
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from './App';
import produtsReducer, { productsFetch } from './features/produtsSlice';
import { productsApi } from './features/productsApi';
import { getTotals } from './features/cartSlice';
import cartReducer from './features/cartSlice';

const store = configureStore({
  reducer: {
    products: produtsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

store.dispatch(productsFetch()); // Dispatch the action after rendering
store.dispatch(getTotals()); // Dispatch the action after rendering

