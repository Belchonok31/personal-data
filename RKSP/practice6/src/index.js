import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="20783083112-bgdtv15rp4lc75e8l52dmg6494b3rfur.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>;
  </React.StrictMode>
);
reportWebVitals();
