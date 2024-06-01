import { Link } from 'react-router-dom';
import Rating from '~/components/Rating/Rating';
import { MdAddShoppingCart } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '~/redux/features/cartSlice';
import { toast } from 'react-toastify';
import Modal from '~/pages/Modal/Modal';
import { useState } from 'react';

function ProductItem({ item }) {
    const user = useSelector((state) => state.authenSlice.isLogin);
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleAddToCart = (item) => {
        if (user) {
            dispatch(addToCart(item));
            toast.success('Product added cart successfully!');
        } else {
            setModal(true);
        }
    };

    return (
        <>
            {modal && <Modal toggleModal={toggleModal} />}
            <div className="product-container max-w-[275px] border border-[#ebebeb] bg-white min-h-[403px]">
                <figure className="relative product-media bg-[#d7d7d7] overflow-hidden">
                    {item?.onSale ? (
                        <span className="absolute text-sm top-5 left-5 block w-[46px] h-[46px] leading-[46px] text-center bg-red rounded-full text-white">
                            Sale
                        </span>
                    ) : (
                        ''
                    )}

                    <span className="heart absolute top-5 w-[30px] h-[30px] flex justify-center-center items-center rounded-full text-white bg-primary right-5">
                        <FaRegHeart className="w-full" />
                    </span>

                    <Link to={`/product/${item?.slug}`} className="block h-[275px] overflow-hidden">
                        <img
                            loading="lazy"
                            className="w-full h-full object-cover"
                            src={item?.images[0]}
                            alt={item?.title}
                        />
                    </Link>
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="product absolute bottom-0 left-0 right-0 bg-[#1a1a1a] py-[10px] text-sm capitalize text-white flex items-center justify-center gap-2"
                    >
                        <MdAddShoppingCart className="w-4 h-4" />
                        Add to cart
                    </button>
                </figure>

                <div className="pt-4 pb-1 px-5 mb-3">
                    <h3>
                        <Link
                            to=""
                            className="text-[#1a1a1a] text-base font-semibold mb-1 line-clamp-2 leading-[1.25] hover:text-primary transition-colors"
                        >
                            {item?.name}
                        </Link>
                    </h3>
                    <span className="mb-3 block text-primary font-medium text-base">${item?.price}</span>
                    <Rating rating={item?.rating} />
                </div>
            </div>
        </>
    );
}

export default ProductItem;
