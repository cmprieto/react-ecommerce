import React from "react";
import Router from "./app/routes";
import UserProvider from "./app/providers/userProvider";
import { HelmetProvider } from 'react-helmet-async';
const App = () => {
  const helmetContext = {};
  return (
    <div>
      <UserProvider>
        <HelmetProvider context={helmetContext}>
          <Router />
        </HelmetProvider>
      </UserProvider>
    </div>
  );
};

export default App;
