import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import your App component
import reportWebVitals from './reportWebVitals';
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';


const store = createStore({
    authName:'_auth',
    authType:'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
    authTime: 10080
  });

const root = createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <AuthProvider
     store={store}
    >
      <App />
    </AuthProvider>
</React.StrictMode>);

reportWebVitals();
