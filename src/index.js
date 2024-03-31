/*   import App from './App';
  import React from 'react';
  import ReactDOM from 'react-dom/client';

  import { configureStore } from '@reduxjs/toolkit'
  import { Provider } from "react-redux";

  import produtsReducer, { productsFetch } from "./features/produtsSlice";

  const store = configureStore({
  reducer: {
    products: produtsReducer,
  }
});

  store.dispatch(productsFetch());
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <Provider store={store}>
  <React.StrictMode>
      <App />
  </React.StrictMode>
    </Provider>
);
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from './App';
import produtsReducer, { productsFetch } from './features/produtsSlice';
import { productsApi } from './features/productsApi';
const store = configureStore({
  reducer: {
    products: produtsReducer,
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

