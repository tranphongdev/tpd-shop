import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Adresses() {
    return (
        <div>
            <p className="text-[#777] text-sm font-light mb-2">
                The following addresses will be used on the checkout page by default.
            </p>
            <div className="pt-10 px-[28px] pb-5 bg-[#f9f9f9]">
                <h3 className="mb-[15px] text-xl">Billing Address</h3>
                <p className="font-bold text-[#777] text-sm mb-2">
                    Fullname: <span className="font-normal">TranPhong</span>
                </p>
                <p className="font-bold text-[#777] text-sm mb-2">
                    Email: <span className="font-normal">TranPhong</span>
                </p>
                <p className="font-bold text-[#777] text-sm mb-2">
                    Phone number: <span className="font-normal">TranPhong</span>
                </p>
                <Link to="/dashboard" className="text-primary mt-5 flex items-center gap-1 text-sm">
                    Edit <FiEdit />
                </Link>
            </div>
        </div>
    );
}

export default Adresses;
