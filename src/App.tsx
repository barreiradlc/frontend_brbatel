import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CompanyModalProvider } from './hooks/CompanyModalProvider';
import { Routes } from './routes';
import GlobalStyles from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <CompanyModalProvider>
        <Routes />
      </CompanyModalProvider>
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App;
