import bg from '~/assets/images/bg-2.jpg';
import { FaTwitter, FaYoutube, FaFacebookF, FaPinterest, FaLinkedin } from 'react-icons/fa';
import { MdArrowRightAlt } from 'react-icons/md';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Cta() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            toast.error('Email cannot be empty.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error('Invalid email format.');
            return;
        }

        toast.success('Order successfully placed');
        setEmail('');
    };

    return (
        <section className="page-wrapper">
            <div className="relative w-full h-[500px] lg:h-fit">
                <div className="relative w-full h-full">
                    <img src={bg} alt="bg" className="w-full h-full object-cover" />
                    <div className="absolute inset-2 flex lg:flex-row flex-col bg-white gap-5">
                        <div className="lg:w-1/2 w-full my-10 lg:my-20 px-6 lg:px-24 text-center lg:border-r lg:border-[#ebebeb]">
                            <h3 className="text-2xl lg:text-3xl">Shop Social</h3>
                            <p className="text-[#999] mb-5 leading-[1.5] font-light">
                                Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                            </p>
                            <div className="flex justify-center items-center gap-2">
                                <FaFacebookF className="w-10 h-10 hover:bg-white hover:text-[#8f79ed] transition-colors border-[#8f79ed] border rounded-full bg-[#8f79ed] text-white p-2 cursor-pointer" />
                                <FaYoutube className="w-10 h-10 hover:bg-white hover:text-[#e66262] transition-colors border-[#e66262] border rounded-full bg-[#e66262] text-white p-2 cursor-pointer" />
                                <FaTwitter className="w-10 h-10 hover:bg-white hover:text-[#79c8ed] transition-colors border-[#79c8ed] border rounded-full bg-[#79c8ed] text-white p-2 cursor-pointer" />
                                <FaPinterest className="w-10 h-10 hover:bg-white hover:text-[#e66262] transition-colors border-[#e66262] border rounded-full bg-[#e66262] text-white p-2 cursor-pointer" />
                                <FaLinkedin className="w-10 h-10 hover:bg-white hover:text-primary transition-colors border-primary border rounded-full bg-primary text-white p-2 cursor-pointer" />
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full my-10 lg:my-20 text-center px-6 lg:px-24">
                            <h3 className="text-2xl lg:text-3xl">Get the Latest Deals</h3>
                            <p className="text-[#999] font-light mb-5">
                                and <br /> receive <span className="text-primary">$20 coupon</span> for first shopping
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="flex">
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text"
                                        className="border focus:border-primary transition-colors rounded-l-3xl outline-none text-sm font-light border-[#ebebeb] py-3 px-5 w-full"
                                        placeholder="Enter your Email Address"
                                    />
                                    <button
                                        type="submit"
                                        className="p-3 rounded-r-3xl px-5 bg-primary text-white text-xl"
                                    >
                                        <MdArrowRightAlt />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;
