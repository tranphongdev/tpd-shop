import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    );
}

export default App;
