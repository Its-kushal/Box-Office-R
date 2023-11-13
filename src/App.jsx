// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Starred from './pages/Starred.jsx';
import MainLayout from './components/MainLayout.jsx';
import Show from './pages/Show.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; //To use tanstack lib. for data fetching instead of useEffect to use ReactStrick Mode in our App

const queryClient = new QueryClient();

function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <BrowserRouter>
            <Routes>
               <Route element={<MainLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/starred" element={<Starred />} />
               </Route>
               <Route path="/show/:showId" element={<Show />} />

               <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
         </BrowserRouter>
      </QueryClientProvider>
   );
}

export default App;
