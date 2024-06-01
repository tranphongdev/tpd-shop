import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

function Wishlist() {
    return (
        <div className="py-[14px] px-[22px]">
            <table className="w-full">
                <thead className="border-b border-gray">
                    <tr>
                        <th className="text-left py-[14px] text-sm font-normal text-[#999]">Product</th>
                        <th className="py-[14px] text-sm font-normal text-[#999]">Price</th>
                        <th className="py-[14px] text-sm font-normal text-[#999]">Stock Status</th>
                        <th className="py-[14px] text-sm font-normal text-[#999]"></th>
                        <th className="py-[14px] text-sm font-normal text-[#999]"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray text-center">
                        <td className="flex items-center gap-4 py-[30px]">
                            <img
                                className="w-[60px] h-[60px] object-cover"
                                src="https://images.pexels.com/photos/23964490/pexels-photo-23964490/free-photo-of-a-stop-sign-on-a-street-corner-next-to-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Product Image"
                            />
                            <p className="line-clamp-2 pr-4 text-left">Wireless headphones JBL Live Pro 2 TWS</p>
                        </td>
                        <td className="py-[30px] w-[180px] text-text">$120</td>
                        <td className="py-[30px] w-[160px] text-[#a6c76c]">In stock</td>
                        <td className="py-[30px] w-[160px]">
                            <p className="flex items-center cursor-pointer hover:bg-primary hover:text-white transition-colors justify-center h-10 border border-primary text-primary text-center">
                                <MdOutlineAddShoppingCart /> Add to cart
                            </p>
                        </td>
                        <td className="py-[30px] w-[38px] ">
                            <button className="w-full block text-center">
                                <IoMdClose className="w-full h-5 text-[#ccc]" />
                            </button>
                        </td>
                    </tr>
                    <tr className="border-b border-gray text-center">
                        <td className="flex items-center gap-4 py-[30px]">
                            <img
                                className="w-[60px] h-[60px] object-cover"
                                src="https://images.pexels.com/photos/23964490/pexels-photo-23964490/free-photo-of-a-stop-sign-on-a-street-corner-next-to-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Product Image"
                            />
                            <p className="line-clamp-2 pr-4 text-left">Wireless headphones JBL Live Pro 2 TWS</p>
                        </td>
                        <td className="py-[30px] w-[180px] text-text">$120</td>
                        <td className="py-[30px] w-[160px] text-[#a6c76c]">In stock</td>
                        <td className="py-[30px] w-[160px]">
                            <p className="flex items-center cursor-pointer hover:bg-primary hover:text-white transition-colors justify-center h-10 border border-primary text-primary text-center">
                                <MdOutlineAddShoppingCart /> Add to cart
                            </p>
                        </td>
                        <td className="py-[30px] w-[38px] ">
                            <button className="w-full block text-center">
                                <IoMdClose className="w-full h-5 text-[#ccc]" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Wishlist;
