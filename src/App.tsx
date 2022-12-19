import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/home';

import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
