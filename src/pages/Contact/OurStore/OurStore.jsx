import { Link } from 'react-router-dom';
import imgContact1 from '~/assets/images/img-contact-1.jpg';
import imgContact2 from '~/assets/images/img-contact-2.jpg';
import { LuMoveRight } from 'react-icons/lu';
import { useEffect } from 'react';

function OurStore() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="page-wrapper">
            <h3 className="text-[28px] font-semibold mb-[30px] text-center">Our Stores</h3>
            <div className="flex lg:flex-row flex-col gap-5 mb-[50px]">
                <div className="flex gap-5">
                    <img src={imgContact1} alt="" />
                    <div>
                        <h4 className="font-normal mb-2">Wall Street Plaza</h4>
                        <p className="text-sm text-[#777]">88 Pine St, New York, NY 10005, USA</p>
                        <span className="text-sm text-[#777]">098 192 2202</span>

                        <h5 className="mt-8 mb-1 text-sm">Store Hours:</h5>
                        <p className="text-sm text-[#777]">Monday - Saturday 11am to 7pm</p>
                        <p className="text-sm text-[#777]">Sunday 11am to 6pm</p>
                        <Link className="flex items-center gap-2 mt-[21px] text-sm text-primary hover:border-b min-w-0 py-1 transition-colors w-fit hover:border-primary">
                            View Map <LuMoveRight />
                        </Link>
                    </div>
                </div>
                <div className="flex gap-5">
                    <img src={imgContact2} alt="imgContact2" />
                    <div>
                        <h4 className="font-normal mb-2">One New York Plaza</h4>
                        <p className="text-sm text-[#777]">88 Pine St, New York, NY 10005, USA</p>
                        <span className="text-sm text-[#777]">098 192 2202</span>

                        <h5 className="mt-8 mb-1 text-sm">Store Hours:</h5>
                        <p className="text-sm text-[#777]">Monday - Friday 9am to 8pm</p>
                        <p className="text-sm text-[#777]">Saturday - 9am to 2pm</p>
                        <p className="text-sm text-[#777]">Sunday - Closed</p>
                        <Link className="flex items-center gap-2 mt-[21px] text-sm text-primary hover:border-b min-w-0 py-1 transition-colors w-fit hover:border-primary">
                            View Map <LuMoveRight />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurStore;
