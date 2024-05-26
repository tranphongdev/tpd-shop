import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
}

export default App;
