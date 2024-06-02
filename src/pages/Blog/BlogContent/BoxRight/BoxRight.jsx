import { IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Banner from '~/assets/images/banner.jpg';

function BoxRight() {
    return (
        <div className="lg:w-1/4 w-full">
            <div className="mb-[45px]">
                <h3 className="text-[18px] mb-[13px]">Search</h3>
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search in blog"
                        className="border border-gray font-light outline-none w-full h-10 py-[9.5px] pl-[14px] pr-[50px] text-sm text-[#777]"
                    />
                    <button className="absolute top-0 right-0 h-10 w-[30px] hover:text-primary transition-colors">
                        <IoSearchOutline className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="mb-[45px]">
                <h3 className="text-[18px] mb-[13px]">Categories</h3>
                <ul>
                    <li>
                        <Link className="text-[15px] text-text leading-6 block mb-[10px]">Lifestyle</Link>
                    </li>
                    <li>
                        <Link className="text-[15px] text-text leading-6 block mb-[10px]">Shopping</Link>
                    </li>
                    <li>
                        <Link className="text-[15px] text-text leading-6 block mb-[10px]">Fashsion</Link>
                    </li>
                    <li>
                        <Link className="text-[15px] text-text leading-6 block mb-[10px]">Travel</Link>
                    </li>
                    <li>
                        <Link className="text-[15px] text-text leading-6 block mb-[10px]">Hobbies</Link>
                    </li>
                </ul>
            </div>
            <div className="mb-[45px] w-fit mx-auto">
                <p className="text-center uppercase text-[#777] text-sm mb-2">ad box 280 x 280</p>
                <div>
                    <img src={Banner} alt="Banner" className="cursor-pointer" />
                </div>
            </div>
            <div>
                <h3 className="text-[18px] mb-[13px]">Browse Tags</h3>
                <div className="flex flex-wrap gap-2">
                    <span className="block text-[#777] w-fit font-light cursor-pointer bg-[#fafafa] hover:text-primary text-sm transition-colors py-[6.5px] px-[9px] border border-gray">
                        fashion
                    </span>
                    <span className="block text-[#777] w-fit font-light cursor-pointer bg-[#fafafa] hover:text-primary text-sm transition-colors py-[6.5px] px-[9px] border border-gray">
                        style
                    </span>
                    <span className="block text-[#777] w-fit font-light cursor-pointer bg-[#fafafa] hover:text-primary text-sm transition-colors py-[6.5px] px-[9px] border border-gray">
                        women
                    </span>
                    <span className="block text-[#777] w-fit font-light cursor-pointer bg-[#fafafa] hover:text-primary text-sm transition-colors py-[6.5px] px-[9px] border border-gray">
                        photography
                    </span>
                    <span className="block text-[#777] w-fit font-light cursor-pointer bg-[#fafafa] hover:text-primary text-sm transition-colors py-[6.5px] px-[9px] border border-gray">
                        travel
                    </span>
                    <span className="block text-[#777] w-fit font-light cursor-pointer bg-[#fafafa] hover:text-primary text-sm transition-colors py-[6.5px] px-[9px] border border-gray">
                        shopping
                    </span>
                    <span className="block text-[#777] w-fit font-light cursor-pointer bg-[#fafafa] hover:text-primary text-sm transition-colors py-[6.5px] px-[9px] border border-gray">
                        hobbies
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BoxRight;
