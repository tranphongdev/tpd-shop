import { IoCaretDownSharp } from 'react-icons/io5';
import { IoMdArrowDropright } from 'react-icons/io';
import { useEffect, useState } from 'react';

function Orders() {
    const [show, setShow] = useState(false);
    const [subTotal, setSubTotal] = useState(0);
    const dataOrder = JSON.parse(localStorage.getItem('dataCart'));

    const caculateSubTotal = () => {
        let total = 0;
        dataOrder.forEach((item) => {
            total += item.price * item.qty;
        });
        setSubTotal(total);
    };

    useEffect(() => {
        caculateSubTotal();
    }, [dataOrder]);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <div>
            <h1 className="text-[40px] font-medium mb-[14px] text-text">My list ordered:</h1>
            <div className="bg-[#fafafa] p-4">
                <p
                    onClick={() => handleShow()}
                    className="flex items-center gap-2 cursor-pointer text-text font-medium"
                >
                    {!show ? <IoCaretDownSharp className="w-6" /> : <IoMdArrowDropright className="w-6 h-6" />}
                    Order code : <span>#{localStorage.getItem('id')}</span>
                </p>
                {!show ? (
                    <div>
                        <table className="w-full">
                            <thead className="border-b border-gray text-[#999]">
                                <tr>
                                    <th className="font-normal py-[14px] text-left text-sm">Product</th>
                                    <th className="font-normal py-[14px] text-left text-sm lg:pl-0 pl-2">Price</th>
                                    <th className="font-normal py-[14px] text-left text-sm">Quantity</th>
                                    <th className="font-normal py-[14px] text-left text-sm">Total</th>
                                    <th className="font-normal py-[14px] text-left text-sm"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataOrder?.map((item, index) => (
                                    <tr key={index} className="border-b border-gray">
                                        <td className="flex items-center gap-4 py-[30px]">
                                            <img
                                                src={item?.images?.[0]}
                                                alt={item?.title}
                                                className="w-[60px] h-[60px] object-cover cursor-pointer"
                                            />
                                            <p className="line-clamp-2 pr-5 cursor-pointer hover:text-primary transition-colors">
                                                {item?.name}
                                            </p>
                                        </td>
                                        <td className="py-[30px] w-[120px] lg:pl-0 pl-2"> ${item?.price}</td>
                                        <td className="py-[30px] w-[120px] lg:pl-0 pl-2">{item?.qty}</td>
                                        <td className="py-[30px] w-[80px] text-primary">${item?.price * item?.qty}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className="mt-4">Total : ${subTotal}</p>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

export default Orders;
