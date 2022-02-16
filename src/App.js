import React, { useContext } from 'react';
import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from 'styled-components';
import  ThemeContext  from './Context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';




function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={{theme}}>
        <GlobalStyles />
        <LandingPage />
      </ThemeProvider>
    </>
  );
};

export default App;
