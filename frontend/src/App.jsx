import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import { Suspense } from 'react';
import Layout from './components/Layout';
import Listing from './pages/Listing';
import Property from './pages/Property';
import Bookings from './pages/Bookings';
import Favourites from './pages/Favourites';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import UserDetailContext from './context/UserDetailContext';

function App() {
  const queryClient = new QueryClient()
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,

  })

  return (
      <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/listing">
                    <Route index element={<Listing />} />
                    <Route path=':propertyId' element={<Property />} />
                  </Route>
                  <Route path='/bookings' element={<Bookings />} />
                  <Route path='/favourites' element={<Favourites />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
          <ToastContainer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </UserDetailContext.Provider>
  );
};

export default App
