import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

const Header = React.lazy(() => import('./components/Header/Header'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const Product = React.lazy(() => import('./pages/Product/Product'));
const Detail = React.lazy(() => import('./pages/Product/DetailProduct/DetailProduct'));

function App() {
    return (
        <Suspense
            fallback={
                <div className="loading-spinner text-center">
                    <span className="loader block mt-20"></span>
                </div>
            }
        >
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:slug" element={<Detail />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
