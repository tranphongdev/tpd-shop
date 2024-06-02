import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = React.lazy(() => import('./components/Header/Header'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const Product = React.lazy(() => import('./pages/Product/Product'));
const Detail = React.lazy(() => import('./pages/Product/DetailProduct/DetailProduct'));
const Cart = React.lazy(() => import('./pages/Cart/Cart'));
const Checkout = React.lazy(() => import('./pages/Checkout/Checkout'));
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));
const Addresses = React.lazy(() => import('./pages/Dashboard/Adresses/Adresses'));
const Wishlist = React.lazy(() => import('./pages/Dashboard/Wishlist/Wishlist'));
const Orders = React.lazy(() => import('./pages/Dashboard/Orders/Orders'));
const Account = React.lazy(() => import('./pages/Dashboard/Account/Account'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const Blog = React.lazy(() => import('./pages/Blog/Blog'));

function App() {
    return (
        <>
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
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/product/:slug" element={<Detail />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/dashboard" element={<Dashboard />}>
                            <Route path="/dashboard" element={<Account />} />
                            <Route path="/dashboard/orders" element={<Orders />} />
                            <Route path="/dashboard/adresses" element={<Addresses />} />
                            <Route path="/dashboard/wishlist" element={<Wishlist />} />
                        </Route>
                    </Route>
                </Routes>
            </Suspense>

            <ToastContainer
                position="top-right"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}

export default App;
