import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderNav from './HeaderNav/HeaderNav';

function Header() {
    return (
        <>
            <header className="sticky top-0 lg:static z-50">
                <HeaderTop />
                <HeaderNav />
            </header>

            <Outlet />
            <Footer />
        </>
    );
}

export default Header;
