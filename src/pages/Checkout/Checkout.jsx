import Breadcrumb from '~/components/Breadcrumb/Breadcrumb';

function Checkout() {
    return (
        <main>
            <section className="page-header">
                <h3 className="text-[#1a1a1a] text-4xl">Checkout</h3>
            </section>
            <Breadcrumb name="Checkout">Product</Breadcrumb>

            <section className="page-wrapper">
                <div className="flex gap-3 items-center mb-[13px]">
                    <input
                        type="text"
                        placeholder="Have a coupon?"
                        className="border-dashed border py-[8.5px] px-[11px] outline-none text-sm w-[300px] border-[#d7d7d7]"
                    />
                    <button className="bg-primary text-white min-w-[170px] py-[8.5px]">Add</button>
                </div>
                <div className="flex gap-5 lg:flex-row flex-col">
                    <div className="lg:w-[70%] w-full">
                        <h3 className="mt-[22px] mb-[18px] text-base text-[#1a1a1a] font-medium">Billing Details</h3>
                        <div className="flex justify-between lg:flex-row flex-col items-center gap-5">
                            <div className="w-full">
                                <label htmlFor="" className="block text-sm text-[#666] mb-1">
                                    Full Name*
                                </label>
                                <input
                                    type="text"
                                    className="bg-[#f9f9f9] mb-3 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="" className="block text-sm text-[#666] mb-1">
                                    Phone number*
                                </label>
                                <input
                                    type="text"
                                    className="bg-[#f9f9f9] mb-3 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="" className="block text-sm text-[#666] mb-1">
                                    District/Town *
                                </label>
                                <input
                                    type="text"
                                    className="bg-[#f9f9f9] mb-3 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between lg:flex-row flex-col items-center gap-5 mb-3">
                            <div className="w-full">
                                <label htmlFor="" className="block text-sm text-[#666] mb-1">
                                    Province/City *
                                </label>
                                <select
                                    name=""
                                    id=""
                                    className="outline-none w-full bg-[#f9f9f9] border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                                >
                                    <option value="">Hà Nội</option>
                                    <option value="">Nam Định</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="" className="block text-sm text-[#666] mb-1">
                                    Province/City *
                                </label>
                                <select
                                    name=""
                                    className="outline-none w-full bg-[#f9f9f9] border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                                >
                                    <option value="">Hà Nội</option>
                                    <option value="">Nam Định</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="" className="block text-sm text-[#666] mb-1">
                                    Ward *
                                </label>
                                <select
                                    name=""
                                    id=""
                                    className="outline-none w-full bg-[#f9f9f9] border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                                >
                                    <option value="">Hà Nội</option>
                                    <option value="">Nam Định</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className="block text-sm text-[#666] mb-1">
                                Street address*
                            </label>
                            <input
                                type="text"
                                className="bg-[#f9f9f9] mb-3 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                            />
                        </div>
                        <div>
                            <label htmlFor="" className="block text-sm text-[#666] mb-1">
                                Order notes (optional)
                            </label>
                            <textarea
                                placeholder="Notes about your order, e.g. special notes for delivery"
                                rows="7"
                                className="bg-[#f9f9f9] mb-3 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm font-light text-[#777]"
                            ></textarea>
                        </div>
                    </div>
                    <div className="lg:w-[30%] mb-5 w-full p-[30px] border border-dashed border-[#d7d7d7] bg-[#f9f9f9]">
                        <h3 className="pb-[17px] mb-[21px] border-b border-[#ccc] text-[#1a1a1a] font-semibold">
                            Your Order
                        </h3>
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-text font-normal pb-[3px] text-left">Product</th>
                                    <th className="text-text font-normal pb-[3px] text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="h-[70px] border-b border-gray text-[#777] font-light">
                                    <td className="text-sm">
                                        <p>MacBook Pro 16 inch M2 Pro 2023 - 16GB/1TB x 7</p>
                                    </td>
                                    <td className="text-sm min-w-[100px] text-right">$20.300</td>
                                </tr>
                                <tr className="h-[70px] border-b border-gray text-[#777] font-light">
                                    <td className="text-base text-text font-normal">
                                        <p>Subtotal:</p>
                                    </td>
                                    <td className="text-base text-text font-normal text-right">
                                        <p>$20.450</p>
                                    </td>
                                </tr>
                                <tr className="h-[70px] border-b border-gray text-[#777] font-light">
                                    <td className="text-sm">
                                        <p>Shipping:</p>
                                    </td>
                                    <td className="text-sm min-w-[100px] text-right">Express</td>
                                </tr>
                                <tr className="h-[70px]  font-light">
                                    <td className="text-base text-text font-normal text-primary">
                                        <p className="text-primary">Total:</p>
                                    </td>
                                    <td className="text-base text-text font-normal text-right text-primary">
                                        <p className="text-primary">$20.450</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="py-[5px] text-sm font-light">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="shipping"
                                    className="cursor-pointer w-4 h-4 hover:text-primary transition-colors"
                                    id="direct"
                                />
                                <label htmlFor="direct" className="cursor-pointer">
                                    Direct bank transfer
                                </label>
                            </div>
                        </div>
                        <div className="py-[5px] text-sm font-light mb-[32px]">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="shipping"
                                    className="cursor-pointer w-4 h-4 hover:text-primary transition-colors"
                                    id="cash"
                                />
                                <label htmlFor="cash" className="cursor-pointer">
                                    Cash on delivery
                                </label>
                            </div>
                        </div>
                        <button className="hover:bg-primary hover:text-white transition-colors border border-primary py-[8.5px] px-[15px] min-w-[170px] text-sm text-primary">
                            Place Order
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Checkout;
