import { FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import { MdArrowRightAlt } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

import { navLinks } from '~/constants';
import Logo from '~/assets/images/logo.svg';
import { useEffect, useState } from 'react';

function HeaderNav() {
    const [isSticky, setIsSticky] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showTabContent, setShowTabContent] = useState(true);

    const activeNavLink = ({ isActive }) => (isActive ? 'active' : '');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 && window.innerWidth >= 1024) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setShowMenu(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMenuClose = () => {
        setShowMenu(false);
    };

    const handleShowTabMenu = () => {
        setShowTabContent(true);
    };
    const handleShowTabCategory = () => {
        setShowTabContent(false);
    };

    return (
        <div
            className={`border-b bg-white border-[#f4f4f4] z-50 ${
                isSticky ? 'sticky-header lg:fixed lg:top-0 lg:left-0 lg:right-0' : ''
            }`}
        >
            <div
                className={`page-wrapper flex justify-between items-center relative ${showMenu ? 'menu-active' : ''} `}
            >
                {/* Left */}
                <div className="flex">
                    <button
                        onClick={() => setShowMenu(true)}
                        className="mx-[10px] text-[#666] px-[3px] py-[2px] lg:hidden"
                    >
                        <FaBars className="w-6 h-6" />
                    </button>
                    <Link to="/" className="w-40">
                        <img src={Logo} alt="tranphongdev-logo" className="w-full my-5" />
                    </Link>
                </div>

                {/* Nav menu */}
                <ul className="lg:flex lg:items-center hidden">
                    {navLinks?.map((nav, index) => (
                        <li key={index}>
                            <NavLink
                                to={nav?.path}
                                className={`${activeNavLink} hover:text-primary block px-4 ${
                                    isSticky ? 'py-5' : 'py-[30px]'
                                } font-medium uppercase text-[#1a1a1a] text-sm`}
                            >
                                {nav?.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Right */}
                <div className="cart-menu flex gap-2 items-center hover:text-primary transition-colors cursor-pointer">
                    <div>
                        <RiShoppingCartLine className="w-6 h-6" />
                    </div>
                    <span className="text-xs w-5 h-5 bg-primary text-center leading-5 rounded-full text-white">4</span>

                    {/* Dropdown Cart */}
                    <div className="cart-dropdown">
                        {/* Product */}
                        {/* <div className="flex relative items-center justify-between py-4 pr-6 border-b border-[#ebebeb]">
                            <div className="max-w-[150px]">
                                <h4 className="line-clamp-2 font-semibold text-[#666] transition-colors cursor-pointer hover:text-primary text-left mb-1">
                                    Bluetooth Gaming Corsair Harpoon RGB
                                </h4>
                                <div className="flex gap-2 text-[#999] text-sm">
                                    <span>Qty: 2</span>
                                    <span>$90</span>
                                </div>
                            </div>

                            <div className="w-[60px] h-[60px] cursor-pointer">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt=""
                                />
                            </div>

                            <button className="absolute top-1/2 -translate-y-1/2 right-[3px]">
                                <IoMdClose className="w-4 h-4" />
                            </button>
                        </div> */}

                        {/* Total */}
                        <div className="pr-[22px] pb-[22px]">
                            <div className="pt-[10px] pb-[5px] mb-[11px] flex justify-between items-center">
                                <span className="uppercase text-sm font-semibold text-[#666]">Total</span>
                                <span className="text-base font-semibold text-primary">$180</span>
                            </div>

                            {/* <div className="flex justify-between items-center">
                                <button className="capitalize bg-primary text-white py-2 px-4 min-w-[110px] hover:bg-[#0097e6] transition-colors">
                                    View cart
                                </button>
                                <button className="capitalize flex items-center gap-2 border border-primary py-2 px-4 min-w-[110px] text-primary hover:bg-primary hover:text-white transition-colors">
                                    Checkout <MdArrowRightAlt />
                                </button>
                            </div> */}

                            {/* Product Empty */}
                            <button className="bg-primary min-w-[110px] text-white w-full py-2 hover:bg-[#0064e6] transition-colors">
                                No product incart shopping now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`mobile-menu-overlay ${showMenu ? 'visible' : ''}`} onClick={handleMenuClose}></div>
                <div className={`mobile-menu-container ${showMenu ? 'active' : ''}`}>
                    <div className="relative text-white py-[42px] text-[13px]">
                        <ul className="flex justify-between border-b border-[#33333380]">
                            <li
                                onClick={handleShowTabMenu}
                                className={`py-2 px-5 w-1/2 uppercase font-semibold cursor-pointer ${
                                    showTabContent ? 'border-primary active border-b-2' : ''
                                }`}
                            >
                                Menu
                            </li>
                            <li
                                onClick={handleShowTabCategory}
                                className={`py-2 px-5 w-1/2 uppercase font-semibold cursor-pointer ${
                                    showTabContent ? '' : 'border-primary active border-b-2'
                                }`}
                            >
                                Categories
                            </li>
                        </ul>

                        {showTabContent ? (
                            <ul>
                                {navLinks?.map((nav, index) => (
                                    <li key={index} className="border-[#ffffff14] border-b">
                                        <NavLink
                                            onClick={handleMenuClose}
                                            to={nav?.path}
                                            className={`inline-block py-[10px] pl-5 pr-[45px] uppercase text-[13px] ${activeNavLink}`}
                                        >
                                            {nav?.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <ul>
                                <li className="border-[#ffffff14] border-b">
                                    <NavLink
                                        onClick={handleMenuClose}
                                        className={`inline-block py-[10px] pl-5 pr-[45px] uppercase text-[13px] ${activeNavLink}`}
                                    >
                                        Category
                                    </NavLink>
                                </li>
                            </ul>
                        )}

                        <ul className="flex justify-center gap-[25px] mt-[25px]">
                            <li>
                                <Link>
                                    <FaFacebook className="w-5 h-5" />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <FaTwitter className="w-5 h-5" />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <FaGithub className="w-5 h-5" />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <FaLinkedin className="w-5 h-5" />
                                </Link>
                            </li>
                        </ul>

                        <button onClick={handleMenuClose} className="absolute top-2 right-2 hover:text-primary">
                            <IoMdClose className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderNav;
