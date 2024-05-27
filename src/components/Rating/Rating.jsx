import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating); // Số ngôi sao đầy đủ
    const hasHalfStar = rating % 1 !== 0; // Có phải là số thập phân không
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Số ngôi sao trống

    return (
        <div className="flex text-[#f1c40f] items-center text-sm gap-[6px]">
            {[...Array(fullStars)].map((_, index) => (
                <FaStar key={index} />
            ))}
            {hasHalfStar && <FaStarHalfAlt />}
            {[...Array(emptyStars)].map((_, index) => (
                <FaRegStar key={index} />
            ))}
        </div>
    );
};

export default Rating;
