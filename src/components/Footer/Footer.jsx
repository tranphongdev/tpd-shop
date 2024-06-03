import { Link } from 'react-router-dom';
import Logo from '~/assets/images/logo.svg';
import payments from '~/assets/images/payments.png';
import { FiPhone } from 'react-icons/fi';
import { navLinks } from '~/constants';

function Footer() {
    return (
        <footer className="page-wrapper">
            <div className="pt-[67px] pb-[30px] flex flex-col lg:flex-row justify-between items-start">
                <div className="mb-10">
                    <Link className="text-[#777] text-sm font-light block mb-2" to="/">
                        <img src={Logo} alt="Logo" className="w-[120px] mb-5" />
                    </Link>
                    <p className="text-[#777] text-sm font-light max-w-[280px] mb-3">
                        TPDShop is a project developed by Tran Phong Dev
                    </p>
                    <div className="relative border-[#ebebeb] border max-w-[270px] leading-[1.5] rounded pt-4 pr-5 pb-4 pl-[70px]">
                        <FiPhone className="w-7 h-7 text-primary absolute top-1/2 -translate-y-1/2 left-5" />
                        <div>
                            <span className="text-[13px] font-light">Got Question? Call us 24/7</span>
                            <p className="text-xl cursor-pointer hover:text-primary transition-colors">098 197 2202</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-medium text-base mb-5 capitalize">Useful Links</h4>
                    <ul>
                        {navLinks?.map((nav, index) => (
                            <li key={index}>
                                <Link
                                    className="text-[#777] text-sm font-light block mb-2 hover:text-primary transition-colors"
                                    to={nav?.path}
                                >
                                    {nav?.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium text-base mb-5 capitalize">Customer Service</h4>
                    <ul>
                        <li>
                            <Link
                                className="text-[#777] text-sm font-light block mb-2 hover:text-primary transition-colors"
                                to=""
                            >
                                Payment Methods
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-[#777] text-sm font-light block mb-2 hover:text-primary transition-colors"
                                to=""
                            >
                                Returns
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-[#777] text-sm font-light block mb-2 hover:text-primary transition-colors"
                                to=""
                            >
                                Shipping
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-[#777] text-sm font-light block mb-2 hover:text-primary transition-colors"
                                to=""
                            >
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium text-base mb-5 capitalize">My Account</h4>
                    <ul>
                        <li>
                            <Link
                                className="text-[#777] text-sm font-light block mb-2 hover:text-primary transition-colors"
                                to="/dashboard"
                            >
                                Account Details
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-[#777] text-sm font-light block mb-2 hover:text-primary transition-colors"
                                to="/cart"
                            >
                                View Cart
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-[#777] text-sm font-light block mb-2 hover:text-primary transition-colors"
                                to="/dashboard/wishlist"
                            >
                                My Wishlist
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-[#777] text-sm font-light block mb-2 hover:text-primary transition-colors"
                                to="/dashboard/orders"
                            >
                                Track My Order
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-[#ebebeb] py-4 flex flex-col lg:flex-row items-center justify-between gap-3">
                <p className="text-center text-[#777] font-light text-sm">
                    Copyright © 2024 -{' '}
                    <span className="font-bold cursor-pointer hover:text-primary transition-colors">TranPhongDev</span>.
                    All Rights Reserved.
                </p>

                <div>
                    <img src={payments} alt="payments" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
