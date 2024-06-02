import Rating from '~/components/Rating/Rating';
import { GoPlus } from 'react-icons/go';
import { HiOutlineMinusSmall } from 'react-icons/hi2';
import { MdAddShoppingCart } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaRegHeart, FaYoutube, FaPinterest } from 'react-icons/fa';
import { useState } from 'react';

import Modal from '~/pages/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartQty } from '~/redux/features/cartSlice';
import { toast } from 'react-toastify';
import { addToWishList } from '~/redux/features/wishlistSlice';

function DetailContent({ data }) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.authenSlice.isLogin);
    const [modal, setModal] = useState(false);
    const [value, setValue] = useState(1);
    const [selectedImg, setSelectedImg] = useState(data?.images?.[0]);

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleDelete = () => {
        if (value > 1) {
            setValue(value - 1);
        }
    };

    const handleAddWishList = (item) => {
        dispatch(addToWishList(item));
    };

    const handleAddToCart = (item) => {
        if (user) {
            dispatch(addToCartQty({ ...item, qty: value }));
            toast.success('Added to cart successfully!');
        } else {
            setModal(true);
        }
    };

    return (
        <>
            {modal && <Modal toggleModal={toggleModal} />}
            <section className="page-wrapper">
                <div className="flex lg:flex-row flex-col gap-5 items-start">
                    <div className="lg:w-1/2 w-full flex gap-[10px]">
                        <div className="w-1/5">
                            {data?.images?.map((item, index) => (
                                <img
                                    key={index}
                                    src={item}
                                    alt="Name"
                                    onClick={() => setSelectedImg(item)}
                                    className={`${
                                        selectedImg === item ? 'border-primary border' : ''
                                    } cursor-pointer w-[114px] h-[114px] object-cover`}
                                />
                            ))}
                        </div>
                        <div className="w-4/5">
                            <img
                                loading="lazy"
                                src={selectedImg ? selectedImg : data?.images?.[0]}
                                alt={data?.name}
                                className="w-[457.188px] h-[457.188px] object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <h1 className="text-[24px] mb-3 text-[#1a1a1a]">{data?.name}</h1>
                        <div className="flex items-center gap-2 mb-3">
                            <Rating rating={data?.rating} />
                            <span className="text-sm text-[#ccc] font-light cursor-pointer transition-colors hover:text-primary">
                                (2 Reviews)
                            </span>
                        </div>
                        <span className="text-[24px] mb-3 block text-primary">${data?.price}</span>
                        <div
                            className="text-[#777] text-sm font-light mb-4 leading-7"
                            dangerouslySetInnerHTML={{ __html: data?.description || '' }}
                        />
                        <div className="flex items-center gap-4 mb-5">
                            <span className="text-sm">Qty:</span>
                            <div className="flex items-center">
                                <button
                                    onClick={() => setValue((prev) => prev + 1)}
                                    className="border border-gray w-10 h-10 mx-auto transition-colors hover:text-primary"
                                >
                                    <GoPlus className="w-full" />
                                </button>
                                <span className="border-y border-gray block w-10 h-10 text-center leading-10 text-sm">
                                    {value}
                                </span>
                                <button
                                    onClick={() => handleDelete()}
                                    className="border border-gray w-10 h-10 transition-colors hover:text-primary"
                                >
                                    <HiOutlineMinusSmall className="w-full" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 mb-[30px]">
                            <button
                                onClick={() => handleAddToCart(data)}
                                className="flex items-center gap-2 transition-colors hover:bg-primary hover:text-white capitalize justify-center py-[10px] px-[15px] text-[16px] font-light min-w-[198px] border border-gray"
                            >
                                <MdAddShoppingCart /> Add to cart
                            </button>
                            <button
                                onClick={() => handleAddWishList(data)}
                                className="flex items-center gap-2 font-light hover:text-primary justify-center capitalize hover:border hover:border-primary py-[10px] px-[15px] text-[16px] min-w-[198px] border-white border transition-colors"
                            >
                                <FaRegHeart /> add to wishlist
                            </button>
                        </div>

                        <div className="flex justify-between py-[17px] border-t border-gray">
                            <div className="text-sm">
                                <span className="text-[#777]">
                                    Category:{' '}
                                    <span className="text-[#1a1a1a] hover:text-primary transition-colors cursor-pointer">
                                        {data.category?.name ?? 'Unknown Category'}
                                    </span>
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-[#777] text-sm">
                                <span>Share:</span>
                                <div className="flex gap-3 items-center">
                                    <FaFacebook className="w-6 h-6 cursor-pointer" />
                                    <FaTwitter className="w-6 h-6 cursor-pointer" />
                                    <FaYoutube className="w-6 h-6 cursor-pointer" />
                                    <FaPinterest className="w-6 h-6 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailContent;
