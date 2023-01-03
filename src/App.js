import '../src/scss/app.scss';
import Header from './components/Header';
import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { useDispatch } from 'react-redux';
import { window } from './redux/slices/basketSlice';

function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    document.body.addEventListener('click', () => {
      dispatch(window())
    })
  }, [])

  return ( 
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
