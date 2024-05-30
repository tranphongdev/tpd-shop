import { GoPlus } from 'react-icons/go';
import { HiOutlineMinusSmall } from 'react-icons/hi2';
import Breadcrumb from '~/components/Breadcrumb/Breadcrumb';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';

function Cart() {
    return (
        <main>
            <section className="page-header">
                <h3 className="text-[#1a1a1a] text-4xl">Shopping Cart</h3>
            </section>
            <Breadcrumb name="Shopping Cart">Product</Breadcrumb>

            <section className="page-wrapper flex gap-5">
                <div className="w-[70%]">
                    <table className="w-full">
                        <thead className="border-b border-gray text-[#999]">
                            <tr>
                                <th className="font-normal py-[14px] text-left text-sm">Product</th>
                                <th className="font-normal py-[14px] text-left text-sm">Price</th>
                                <th className="font-normal py-[14px] text-left text-sm">Quantity</th>
                                <th className="font-normal py-[14px] text-left text-sm">Total</th>
                                <th className="font-normal py-[14px] text-left text-sm"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray">
                                <td className="flex items-center gap-4 py-[30px]">
                                    <img
                                        src="https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt=""
                                        className="w-[60px] h-[60px] object-cover cursor-pointer"
                                    />
                                    <p className="line-clamp-2 pr-5 cursor-pointer hover:text-primary transition-colors">
                                        MacBook Pro 16 inch M2 Pro 2023 - 16GB/1TB MacBook Pro 16 inch M2 Pro 2023 -
                                        MacBook Pro 16 inch M2 Pro 2023 - 16GB/1TB MacBook Pro 16 inch M2 Pro 2023 -
                                        16GB/1TB
                                    </p>
                                </td>
                                <td className="py-[30px] w-[120px]"> $2.900</td>
                                <td className="py-[30px] w-[135px]">
                                    <div className="flex items-center">
                                        <button className="border border-gray w-10 h-10 hover:text-primary transition-colors">
                                            <GoPlus className="w-5 h-5 mx-auto" />
                                        </button>
                                        <span className="w-10 h-10 block leading-10 text-center border-y-gray border-y">
                                            1
                                        </span>
                                        <button className="border border-gray w-10 h-10 hover:text-primary transition-colors">
                                            <HiOutlineMinusSmall className="w-5 h-5 mx-auto" />
                                        </button>
                                    </div>
                                </td>
                                <td className="py-[30px w-[80px] text-primary">$46.400</td>
                                <td className="py-[30px] w-[38px] text-right">
                                    <button className="hover:text-primary transition-colors text-[#ccc]">
                                        <IoCloseSharp className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-[30%]">
                    <div className="py-[25px] px-[30px] border-dashed bg-[#f9f9f9] border-gray border">
                        <h3 className="pb-[17px] font-medium border-b border-[#ccc]">Cart Total</h3>
                        <div className="h-[70px] border-b border-gray leading-[70px] flex justify-between text-[#1a1a1a]">
                            <span>Subtotal:</span>
                            <span>$46.550</span>
                        </div>
                        <div>
                            <span className="block pt-5 pb-[13px]">Shipping:</span>
                            <div>
                                <div className="flex justify-between items-center py-[5px] text-sm font-light">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            className="cursor-pointer w-4 h-4"
                                            id="free"
                                        />
                                        <label htmlFor="free" className="cursor-pointer">
                                            Free Shipping
                                        </label>
                                    </div>
                                    <span>$0</span>
                                </div>
                                <div className="flex justify-between items-center py-[5px] text-sm font-light">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            className="cursor-pointer w-4 h-4"
                                            id="stand"
                                        />
                                        <label htmlFor="stand" className="cursor-pointer">
                                            Standard:
                                        </label>
                                    </div>
                                    <span>$10</span>
                                </div>
                                <div className="flex justify-between items-center py-[5px] text-sm font-light">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            className="cursor-pointer w-4 h-4"
                                            id="express"
                                        />
                                        <label htmlFor="express" className="cursor-pointer">
                                            Express:
                                        </label>
                                    </div>
                                    <span>$20</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[14px] pb-[23px] border-b border-gray">
                            <h3 className="pb-2">Estimate for Your Country</h3>
                            <Link to="/" className="text-sm text-[#999] border-b">
                                Change address
                            </Link>
                        </div>
                        <div className="h-[70px]">
                            <span>Total:</span>
                            <span>$46.550</span>
                        </div>
                        <Link to="/checkout">PROCEED TO CHECKOUT</Link>
                    </div>

                    <Link>
                        CONTINUE SHOPPING <RiArrowGoBackLine />
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Cart;
