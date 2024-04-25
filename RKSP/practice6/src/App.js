import './App.css';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [userName, setUserName] = useState(null);
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );

        // Получаем имя пользователя из ответа
        const name = res.data.name;
        if (name) {
          setUserName(name);
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="App">
       <h1>React Google Login</h1>
      <button onClick={() => login()}>Sign in with Google 🚀</button>
      {userName && <p>Привет, {userName}!</p>}
    </div>
  );
}

export default App;
