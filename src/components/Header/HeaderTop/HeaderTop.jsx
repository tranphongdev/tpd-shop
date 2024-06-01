import { useState } from 'react';
import { FiUser, FiPhone } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Modal from '~/pages/Modal/Modal';
import { doLogout } from '~/redux/features/authSlice';
import { Link } from 'react-router-dom';
import { IoChevronDownSharp } from 'react-icons/io5';

function HeaderTop() {
    const isLogin = useSelector((state) => state.authenSlice.isLogin);
    const username = useSelector((state) => state.authenSlice.username);
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleLogout = () => {
        dispatch(doLogout());
        toast.success('Logout successfuly!');
    };

    return (
        <>
            <div className="border-b bg-white border-[#EBEBEB] py-2 text-[#777] text-[15px] leading-6 z-50">
                <div className="page-wrapper flex justify-between items-center">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                        <FiPhone />
                        <span>Hotline: 098 197 2202</span>
                    </div>
                    {!isLogin ? (
                        <div className="flex items-center gap-1">
                            <button onClick={toggleModal} className="flex items-center gap-1">
                                <FiUser /> Login
                            </button>
                            <button> | Resgister</button>
                        </div>
                    ) : (
                        <div className="relative top-menu">
                            <div className="flex items-center gap-1 cursor-pointer">
                                <FiUser className="w-4 h-4" />
                                <span className="block mt-1 capitalize text-sm">{username}</span>
                                <IoChevronDownSharp className="w-4 h-4 mt-1" />
                            </div>
                            <div className="absolute top-submenu bg-white shadow-sm z-10 pb-[6px] text-sm pt-4 right-0">
                                <Link
                                    to="/dashboard"
                                    className="py-[6px] px-[15px] hover:text-primary transition-colors"
                                >
                                    Account Details
                                </Link>
                                <Link className="block py-[6px] px-[15px] hover:text-primary transition-colors">
                                    Your Orders
                                </Link>
                                <Link className="block py-[6px] px-[15px] hover:text-primary transition-colors">
                                    Wishlist <span className="text-primary">(1)</span>
                                </Link>
                                <button
                                    onClick={() => handleLogout()}
                                    className="block w-full text-left hover:text-primary transition-colors"
                                >
                                    <Link className="block py-[6px] px-[15px] w-full">Logout</Link>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {modal && <Modal toggleModal={toggleModal} />}
        </>
    );
}

export default HeaderTop;
