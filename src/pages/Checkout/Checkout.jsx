import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Breadcrumb from '~/components/Breadcrumb/Breadcrumb';
import { vietnamProvinces } from '~/constants';
import { delAllCart } from '~/redux/features/cartSlice';
import { generateRandomID } from '~/utils/randomId';
import { validateForm } from '~/utils/rules';

function Checkout() {
    const dipatch = useDispatch();
    const navigate = useNavigate();
    const carts = useSelector((state) => state.dataCart.carts);
    const [subTotal, setSubTotal] = useState(0);
    const location = useLocation();
    const { total, shippingOption } = location.state || { total: 0, shippingOption: '' };
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: localStorage.getItem('username') || '',
        email: '',
        phone: '',
        address: '',
        note: '',
        subject: 'none',
        message: 'none',
    });
    const cartsJSON = JSON.stringify(carts);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const calculateSubTotal = () => {
        let total = 0;
        carts.forEach((item) => {
            total += item.price * item.qty;
        });
        setSubTotal(total);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            toast.success('Đặt hàng thành công!');
            setFormData({
                name: localStorage.getItem('username') || '',
                email: '',
                phone: '',
                address: '',
                note: '',
                subject: 'none',
                message: 'none',
            });
            dipatch(delAllCart());
            navigate('/checkout_sucess');
            localStorage.setItem('dataCart', cartsJSON);
            localStorage.setItem('id', generateRandomID(10));
        } else {
            toast.error('Không đúng định dạng form!');
        }
    };

    useEffect(() => {
        calculateSubTotal();
    }, [carts]);

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
                <form onSubmit={handleSubmit} className="flex gap-5 lg:flex-row flex-col">
                    <div className="lg:w-[70%] w-full">
                        <h3 className="mt-[22px] mb-[18px] text-base text-[#1a1a1a] font-medium">Billing Details</h3>
                        <div className="flex justify-between lg:flex-row flex-col items-center gap-5">
                            <input
                                hidden
                                id="subject"
                                onChange={handleChange}
                                name="subject"
                                value={formData.subject}
                                type="text"
                                className="bg-[#f9f9f9] mb-3 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                            />
                            <textarea
                                hidden
                                id="message"
                                onChange={handleChange}
                                name="message"
                                value={formData.message}
                                placeholder="Write your message here"
                                rows="7"
                                className="bg-[#f9f9f9] mb-3 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm font-light text-[#777]"
                            ></textarea>
                            <div className="w-full">
                                <label htmlFor="name" className="block text-sm text-[#666] mb-1">
                                    Full Name*
                                </label>
                                <input
                                    id="name"
                                    onChange={handleChange}
                                    name="name"
                                    value={formData.name}
                                    type="text"
                                    className="bg-[#f9f9f9] mb-3 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                                />
                            </div>
                            <div className="w-full">
                                <div>
                                    {errors.phone && <p className="text-xs mb-1 text-[#e84118]">{errors.phone}</p>}
                                </div>
                                <label htmlFor="phone" className="block text-sm text-[#666] mb-1">
                                    Phone number*
                                </label>
                                <input
                                    id="phone"
                                    onChange={handleChange}
                                    name="phone"
                                    value={formData.phone}
                                    type="text"
                                    className="bg-[#f9f9f9] mb-3 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                                />
                            </div>
                            <div className="w-full">
                                <div>
                                    {errors.email && <p className="text-xs mb-1 text-[#e84118]">{errors.email}</p>}
                                </div>
                                <label htmlFor="email" className="block text-sm text-[#666] mb-1">
                                    Email*
                                </label>
                                <input
                                    id="email"
                                    onChange={handleChange}
                                    name="email"
                                    value={formData.email}
                                    type="text"
                                    className="bg-[#f9f9f9] mb-3 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between lg:flex-row flex-col items-center gap-5 mb-3">
                            <div className="w-full">
                                <label htmlFor="province" className="block text-sm text-[#666] mb-1">
                                    Province/City *
                                </label>
                                <select
                                    id="province"
                                    name="province"
                                    onChange={handleChange}
                                    value={formData.province}
                                    className="outline-none w-full bg-[#f9f9f9] border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                                >
                                    {vietnamProvinces?.map((item) => (
                                        <option key={item?.area} value={item?.area}>
                                            {item?.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="district" className="block text-sm text-[#666] mb-1">
                                    District *
                                </label>
                                <select
                                    id="district"
                                    name="district"
                                    onChange={handleChange}
                                    value={formData.district}
                                    className="outline-none w-full bg-[#f9f9f9] border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                                >
                                    {vietnamProvinces?.map((item) => (
                                        <option key={item?.area} value={item?.area}>
                                            {item?.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="ward" className="block text-sm text-[#666] mb-1">
                                    Ward *
                                </label>
                                <select
                                    id="ward"
                                    name="ward"
                                    onChange={handleChange}
                                    value={formData.ward}
                                    className="outline-none w-full bg-[#f9f9f9] border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                                >
                                    {vietnamProvinces?.map((item) => (
                                        <option key={item?.area} value={item?.area}>
                                            {item?.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <div>
                                {errors.address && <p className="text-xs mb-1 text-[#e84118]">{errors.address}</p>}
                            </div>
                            <label htmlFor="address" className="block text-sm text-[#666] mb-1">
                                Street address*
                            </label>
                            <input
                                id="address"
                                onChange={handleChange}
                                name="address"
                                value={formData.address}
                                type="text"
                                className="bg-[#f9f9f9] mb-3 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                            />
                        </div>
                        <div>
                            <div>{errors.note && <p className="text-xs mb-1 text-[#e84118]">{errors.note}</p>}</div>
                            <label htmlFor="note" className="block text-sm text-[#666] mb-1">
                                Order notes (optional)
                            </label>
                            <textarea
                                id="note"
                                onChange={handleChange}
                                name="note"
                                value={formData.note}
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
                                {carts?.map((item, index) => (
                                    <tr key={index} className="h-[70px] border-b border-gray text-[#777] font-light">
                                        <td className="text-sm">
                                            <p>
                                                {item?.name} x {item?.qty}
                                            </p>
                                        </td>
                                        <td className="text-sm min-w-[100px] text-right">${item?.price * item?.qty}</td>
                                    </tr>
                                ))}

                                <tr className="h-[70px] border-b border-gray text-[#777] font-light">
                                    <td className="text-base text-text font-normal">
                                        <p>Subtotal:</p>
                                    </td>
                                    <td className="text-base text-text font-normal text-right">
                                        <p>${subTotal}</p>
                                    </td>
                                </tr>
                                <tr className="h-[70px] border-b border-gray text-[#777] font-light">
                                    <td className="text-sm">
                                        <p>Shipping:</p>
                                    </td>
                                    <td className="text-sm min-w-[100px] text-right">
                                        {shippingOption === 0 && 'Free Ship'}
                                        {shippingOption === 10 && 'Standard'}
                                        {shippingOption === 20 && 'Express'}
                                    </td>
                                </tr>
                                <tr className="h-[70px]  font-light">
                                    <td className="text-base font-normal">
                                        <p className="text-primary">Total:</p>
                                    </td>
                                    <td className="text-base font-normal text-right">
                                        <p className="text-primary">${total}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="py-[5px] text-sm font-light">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="payment"
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
                                    name="payment"
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
                </form>
            </section>
        </main>
    );
}

export default Checkout;
