import Breadcrumb from '~/components/Breadcrumb/Breadcrumb';
import React, { Suspense, useEffect } from 'react';
import img1 from '~/assets/images/img-1.jpg';
import img2 from '~/assets/images/img-2.jpg';
import img7 from '~/assets/images/7.png';
import img8 from '~/assets/images/8.png';
import img9 from '~/assets/images/9.png';
import { brands } from '~/constants';

const Banner = React.lazy(() => import('./Banner/Banner'));

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Breadcrumb>About</Breadcrumb>
            <Suspense
                fallback={
                    <div className="loading-spinner text-center">
                        <span className="loader block mt-20"></span>
                    </div>
                }
            >
                <Banner />
            </Suspense>

            <section className="bg-[#f9f9f9] pt-[60px] pb-[50px] mb-[80px]">
                <div className="page-wrapper flex lg:flex-row flex-col justify-between items-start gap-5">
                    <div className="lg:w-1/2 w-full lg:pr-14">
                        <h3 className="text-[28px] font-semibold mb-[14px]">Who We Are</h3>
                        <p className="text-primary mb-[30px]">
                            Pellentesque odio nisi, euismod pharetra a ultricies in diam. Sed arcu. Cras consequat
                        </p>
                        <p className="text-[#777] text-sm font-light">
                            Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit
                            nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus
                            metus libero eu augue.
                        </p>
                    </div>
                    <div className="lg:w-1/2 w-full  flex justify-between">
                        <div className="relative w-full pt-10">
                            <img src={img1} alt="img1" className="relative border-[#f9f9f9] border-[20px] z-10" />
                            <img src={img2} alt="img2" className="absolute top-0 right-0 z-[1]" />
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <div className="page-wrapper flex justify-between lg:flex-row flex-col gap-5">
                    <div className="lg:w-[41.6666%] w-full text-center lg:text-left">
                        <h3 className="text-[28px] font-semibold mb-[14px] text-[#1a1a1a]">
                            The world is premium design brands in one destination.
                        </h3>
                        <p className="text-sm text-[#777] font-light">
                            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus
                            id, mattis vel, nis
                        </p>
                    </div>
                    <div className="w-full lg:w-[58.333333%] grid grid-cols-3 gap-10">
                        {brands?.map((brand, index) => (
                            <div key={index} className="lg:ml-auto mx-auto lg:mr-0">
                                <img src={brand.image} alt="brandimage" className="" />
                            </div>
                        ))}
                        <div>
                            <img src={img7} alt="img7" className="lg:ml-auto mx-auto lg:mr-0" />
                        </div>
                        <div>
                            <img src={img8} alt="img8" className="lg:ml-auto mx-auto lg:mr-0" />
                        </div>
                        <div>
                            <img src={img9} alt="img9" className="lg:ml-auto mx-auto lg:mr-0" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;
