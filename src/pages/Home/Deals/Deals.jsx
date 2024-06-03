import { useSelector } from 'react-redux';
import bg from '~/assets/images/bg-1.jpg';
import ProductItem from '~/components/Product/ProductItem/ProductItem';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import Countdown from '../Coutdown/Coutdown';
import { Link } from 'react-router-dom';

function Deals() {
    const products = useSelector((state) => state.dataProduct.products);
    const productFilter = products.filter((item) => item.onSale === true).sort((a, b) => b.rating - a.rating);
    const productSales = productFilter.slice(0, 2);

    const targetDate = new Date('2024-12-31T00:00:00');

    return (
        <section className="py-[70px] mb-[50px] bg-[#f4f7ff]">
            <div className="page-wrapper">
                <div className="text-center mb-10">
                    <h2 className="text-[28px] mb-[10px] text-black font-semibold">Deals & Outlet</h2>
                    <p className="text-base font-light text-[#777]">Today’s deal and more</p>
                </div>

                <div className="flex lg:flex-row flex-col justify-between gap-5">
                    <div className="lg:w-1/2 w-full relative">
                        <img src={bg} alt="bg" className="w-full" />
                        <div className="absolute flex justify-between flex-col top-0 left-0 right-0 bottom-0 pt-[36px] px-10 pb-[48px] mb-5">
                            <div>
                                <h2 className="text-[#ef837b] text-xl leading-[1.1] font-medium mb-1">
                                    Deal of the Day.
                                </h2>
                                <h4 className="font-light text-[#777] text-sm">Limited quantities. </h4>
                            </div>

                            <div>
                                <h3 className="text-[#1a1a1a] transition-colors hover:text-primary cursor-pointer text-base leading-[1.25] font-semibold max-w-[240px] mb-2">
                                    Home Smart Speaker with Google Assistant
                                </h3>
                                <div>
                                    <span className="text-[#ef837b] mr-2 text-xl font-light">$129.00</span>
                                    <span className="text-[#cccccc] font-light text-xl">Was $150.99</span>
                                    <button className="flex items-center gap-2 text-sm text-primary transition-colors border-white hover:border-b py-2 border-b hover:border-primary">
                                        Shop now
                                        <MdOutlineArrowRightAlt />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <Countdown targetDate={targetDate} />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full flex justify-center gap-5">
                        {productSales?.map((item, index) => (
                            <ProductItem key={index} item={item} />
                        ))}
                    </div>
                </div>

                <div className="text-center flex justify-center mt-[30px]">
                    <Link
                        to="/product"
                        className="hover:bg-white hover:text-primary transition-colors flex items-center gap-2 border border-[#d7d7d7] rounded-[40px] py-3 px-4 min-w-[270px] text-sm justify-center"
                    >
                        Shop More <MdOutlineArrowRightAlt className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Deals;
