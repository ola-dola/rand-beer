// import { useEffect, useState } from 'react';
// import Beers from './components/Beers';
// import Header from './components/Header';
// import Loading from './components/Loading';
// import Footer from './components/Footer';
// import axios from 'axios';
// import { PageNotFound } from './components/PageNotFound';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './components/Home';

export const url = 'https://api.punkapi.com/v2/beers';

function App() {
  
  return (
   <ErrorBoundary>
    <Home/>
   </ErrorBoundary>
  );
}

export default App;
