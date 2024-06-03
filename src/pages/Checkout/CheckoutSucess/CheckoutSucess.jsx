import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';

function CheckoutSucess() {
    return (
        <main className="pt-[85px] bg-[#fdfdfd] min-h-[380px]">
            <div className="page-wrapper">
                <h1 className="mb-[14px] text-[50px] text-center text-text">Your Order is Completed!</h1>
                <p className="text-center max-w-[640px] mx-auto text-[#777] mt-[10px] mb-[25px]">
                    Your order <span className="text-text font-bold">{localStorage.getItem('id')}</span> has been
                    completed. Your order details are shown for your personal accont.
                </p>
                <Link to="/" className="flex justify-center">
                    <button className="flex items-center hover:bg-primary hover:text-white transition-colors gap-2 justify-center border border-primary text-primary text-sm min-w-[218px] py-[8.5px]">
                        View my orders <MdOutlineArrowRightAlt />
                    </button>
                </Link>
            </div>
        </main>
    );
}

export default CheckoutSucess;
