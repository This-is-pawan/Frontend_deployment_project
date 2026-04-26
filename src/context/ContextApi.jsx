import React, { createContext, useContext, useState } from 'react';
import { sideBar } from '../components/pages/data.js/Project_data';

// create context
const AppContext = createContext();

// custom hook (THIS makes it global & easy to use)
export const useGlobalContext = () => {
  return useContext(AppContext);
};

const ContextApi = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <AppContext.Provider value={{ sidebar, setSidebar, sideBar }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextApi;