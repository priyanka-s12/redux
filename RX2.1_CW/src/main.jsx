import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* now entire app will be accssed store, providing store to entire app - providing context to entire application  */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
