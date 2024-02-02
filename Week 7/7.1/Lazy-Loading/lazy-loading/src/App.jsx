import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

const Landing = lazy(() => import('./pages/landing'));
const Dashboard = lazy(() => import('./pages/dashboard'));
//when we have not access directly to all components we need to use suspense
//if dashboard takes time then we will see loading for the some time which is the suspense API
//for more properly lazy loading
function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

function Topbar() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate('/')}>Landing</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </>
  );
}

export default App;
