import React from 'react';
import Router from "./app/routes";
import UserProvider from './app/providers/userProvider';

const App = () => {
  return (
    <div >
      <UserProvider>
        <Router />

      </UserProvider>
    </div>
  );
}

export default App;
