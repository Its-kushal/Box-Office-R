// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; //To use tanstack lib. for data fetching instead of useEffect to use ReactStrick Mode in our App
import { GlobalTheme } from './theme';
const queryClient = new QueryClient();

function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <GlobalTheme>
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
         </GlobalTheme>
      </QueryClientProvider>
   );
}

export default App;
