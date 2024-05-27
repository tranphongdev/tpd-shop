import { BsRocketTakeoff } from 'react-icons/bs';

function Boxers() {
    return (
        <section className="page-wrapper">
            <div className="py-5 my-[28px] flex justify-between flex-wrap gap-4 items-center">
                <div className="flex items-center gap-4">
                    <BsRocketTakeoff className="w-10 h-10" />
                    <div>
                        <h3 className="font-semibold mt-[2px] mb-[5px]">Free Shipping</h3>
                        <span className="text-[#777] font-light">Orders $50 or more</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <BsRocketTakeoff className="w-10 h-10" />
                    <div>
                        <h3 className="font-semibold mt-[2px] mb-[5px]">Free Return</h3>
                        <span className="text-[#777] font-light">Within 30 days</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <BsRocketTakeoff className="w-10 h-10" />
                    <div>
                        <h3 className="font-semibold mt-[2px] mb-[5px]">Get 20% Off 1 Item</h3>
                        <span className="text-[#777] font-light">when you sign up</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <BsRocketTakeoff className="w-10 h-10" />
                    <div>
                        <h3 className="font-semibold mt-[2px] mb-[5px]">We Support</h3>
                        <span className="text-[#777] font-light">24/7 amazing services</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Boxers;
