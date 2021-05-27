import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CompanyListProvider } from './hooks/CompanyListProvider';
import { CompanyModalProvider } from './hooks/CompanyModalProvider';
import { Routes } from './routes';
import GlobalStyles from './styles/global'

function App() {
  return (
    <BrowserRouter>
    <CompanyListProvider>
      <CompanyModalProvider>
        <Routes />
      </CompanyModalProvider>
      <GlobalStyles />
    </CompanyListProvider>
    </BrowserRouter>
  )
}

export default App;
