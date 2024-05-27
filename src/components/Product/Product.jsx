import ProductItem from './ProductItem/ProductItem';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Product({ data }) {
    return (
        <div>
            <Swiper
                spaceBetween={12}
                slidesPerView={4}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="py-3"
            >
                {data?.map((item, index) => (
                    <SwiperSlide key={index} className="min-w-[200px]">
                        <ProductItem item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Product;
