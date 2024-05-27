// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { banners, sliders } from '~/constants';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

function Sliders() {
    return (
        <section className="page-wrapper">
            <div className="flex justify-between flex-col lg:flex-row gap-5 py-[30px] mb-5">
                <div className="lg:w-2/3 w-full">
                    <Swiper
                        spaceBetween={12}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {sliders.map((slider) => (
                            <SwiperSlide key={slider?.id} className="relative ">
                                <img src={slider?.image} className="w-full" alt={slider.title} />
                                <div className="absolute top-1/2 -translate-y-1/2 lg:left-[70px] left-10 w-full">
                                    <h3 className="lg:text-xl text-sm text-primary lg:mb-1">{slider?.subtitle}</h3>
                                    <h1 className="lg:text-5xl text-3xl font-bold text-[#333] lg:mb-2">
                                        {slider?.title} <br /> {slider?.title1}
                                    </h1>
                                    <div className="lg:mb-4">
                                        <sup className="lg:text-xl text-sm">{slider?.titlePrice}</sup>
                                        <span className="lg:text-5xl text-3xl font-bold text-primary">
                                            {slider?.price}
                                        </span>
                                        <sup className="lg:text-xl text-sm text-primary">{slider?.priceSub}</sup>
                                    </div>
                                    <button className="flex items-center bg-primary text-white gap-2 lg:py-3 py-[6.5px] px-[10px] lg:px-4 min-w-[90px] text-xs lg:text-base lg:min-w-[170px] justify-center rounded-3xl">
                                        Click here <MdOutlineArrowRightAlt />
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="lg:w-1/3 w-full gap-5 flex flex-col justify-between">
                    {banners?.map((banner, index) => (
                        <div key={index} className="relative">
                            <img src={banner?.image} alt={banner?.title} className="w-full object-cover" />
                            <div className="absolute top-1/2 left-5 -translate-y-1/2 text-lg flex flex-col hover:text-primary transition-colors">
                                <a href="#" className="font-semibold ml-2 mb-2">
                                    {banner?.title} <br /> {banner?.title1}
                                </a>
                                <button className="flex items-center justify-start w-fit transition-colors gap-2 text-primary text-sm px-[10px] py-1 hover:bg-primary hover:text-white rounded-[20px]">
                                    Shop now <MdOutlineArrowRightAlt />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Sliders;
