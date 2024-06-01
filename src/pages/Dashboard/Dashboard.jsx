import { NavLink, Outlet } from 'react-router-dom';
import Breadcrumb from '~/components/Breadcrumb/Breadcrumb';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { doLogout } from '~/redux/features/authSlice';
import { toast } from 'react-toastify';

function Dashboard() {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(doLogout());
        toast.success('Logout success!');
    };

    return (
        <main>
            <section className="page-header">
                <h3 className="text-[#1a1a1a] text-4xl">My Account</h3>
            </section>
            <Breadcrumb>My Account</Breadcrumb>
            <section className="mb-[50px]">
                <div className="page-wrapper flex gap-5 lg:flex-row flex-col">
                    <div className="lg:w-1/4 w-full">
                        <ul>
                            <li>
                                <NavLink
                                    className="text-sm text-text border-b border-gray py-[14px] flex items-center font-normal gap-2"
                                    to="/dashboard"
                                >
                                    <MdOutlineArrowRightAlt /> Account Details
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="text-sm text-text border-b border-gray py-[14px] flex hover:text-primary transition-colors font-light"
                                    to="/dashboard/orders"
                                >
                                    Orders
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="text-sm text-text border-b border-gray py-[14px] flex hover:text-primary transition-colors font-light"
                                    to="/dashboard/wishlist"
                                >
                                    Wishlist
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="text-sm text-text border-b border-gray py-[14px] flex hover:text-primary transition-colors font-light"
                                    to="/dashboard/adresses"
                                >
                                    Adresses
                                </NavLink>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleDelete()}
                                    className="text-sm text-text border-b border-gray py-[14px] block w-full text-left hover:text-primary transition-colors font-light"
                                >
                                    Sign Out
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-3/4 w-full">
                        <Outlet />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Dashboard;
