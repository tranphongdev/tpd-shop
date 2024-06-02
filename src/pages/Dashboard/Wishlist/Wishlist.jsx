import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '~/redux/features/cartSlice';
import { toast } from 'react-toastify';
import { deleteWishList } from '~/redux/features/wishlistSlice';

function Wishlist() {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.dataWishList.wishlist);

    const handleAddCart = (item) => {
        dispatch(addToCart(item));
        toast.success('Add cart success!');
    };
    const handleDelWishList = (item) => {
        dispatch(deleteWishList(item));
        toast.success('Delete success!');
    };

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
                    {wishlist?.map((item) => (
                        <tr key={item?.id} className="border-b border-gray text-center">
                            <td className="flex items-center gap-4 py-[30px]">
                                <img
                                    className="w-[60px] h-[60px] object-cover"
                                    src={item?.images?.[0]}
                                    alt={item?.name}
                                />
                                <p className="line-clamp-2 pr-4 text-left">{item?.name}</p>
                            </td>
                            <td className="py-[30px] w-[180px] text-text">${item?.price}</td>
                            {item?.stock > 0 ? (
                                <td className="py-[30px] w-[160px] text-[#a6c76c]">In stock</td>
                            ) : (
                                <td className="py-[30px] w-[160px] text-[#e63737]">Out of stock</td>
                            )}

                            <td onClick={() => handleAddCart(item)} className="py-[30px] w-[160px]">
                                <p className="flex items-center cursor-pointer hover:bg-primary hover:text-white transition-colors justify-center h-10 border border-primary text-primary text-center">
                                    <MdOutlineAddShoppingCart /> Add to cart
                                </p>
                            </td>
                            <td className="py-[30px] w-[38px] ">
                                <button onClick={() => handleDelWishList(item)} className="w-full block text-center">
                                    <IoMdClose className="w-full h-5 text-[#ccc]" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Wishlist;
