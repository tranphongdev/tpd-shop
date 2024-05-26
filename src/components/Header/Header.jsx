import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderNav from './HeaderNav/HeaderNav';

function Header() {
    return (
        <>
            <header>
                <HeaderTop />
                <HeaderNav />
            </header>

            <Outlet />
            <Footer />
        </>
    );
}

export default Header;
