import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Product from '~/components/Product/Product';
import { Link } from 'react-router-dom';

function Featured() {
    const products = useSelector((state) => state.dataProduct.products);
    const [activeTab, setActiveTab] = useState('onsale');
    const [loading, setLoading] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleTabClick = (tab) => {
        if (tab !== activeTab && !loading) {
            // Only proceed if the clicked tab is not already active and not loading
            setActiveTab(tab);
            setLoading(true);
        }
    };

    useEffect(() => {
        const filterAndSortProducts = () => {
            let filtered;
            switch (activeTab) {
                case 'featured':
                    filtered = products.filter((product) => product.featured).sort((a, b) => b.rating - a.rating);
                    break;
                case 'onsale':
                    filtered = products.filter((product) => product.onSale).sort((a, b) => b.rating - a.rating);
                    break;
                case 'toprated':
                    filtered = products.filter((product) => product.topRated).sort((a, b) => b.rating - a.rating);
                    break;
                default:
                    filtered = products;
                    break;
            }
            return filtered;
        };

        const timer = setTimeout(() => {
            setFilteredProducts(filterAndSortProducts());
            setLoading(false);
        }, 150); // Simulate a loading delay

        return () => clearTimeout(timer);
    }, [activeTab, products, loading]);

    useEffect(() => {
        setLoading(true);
        setFilteredProducts(products.filter((product) => product.onSale).sort((a, b) => b.rating - a.rating));
        setLoading(false);
    }, []);

    return (
        <section className="page-wrapper min-h-[491px]">
            <div className="mb-20">
                <ul className="mb-8 flex justify-center gap-3 flex-wrap items-center">
                    <li>
                        <Link
                            onClick={() => handleTabClick('onsale')}
                            className={`font-semibold text-2xl text-[#ccc] py-2 px-3 capitalize hover:text-primary transition-colors ${
                                activeTab === 'onsale' ? 'active border-b ' : ''
                            }`}
                        >
                            On Sale
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => handleTabClick('featured')}
                            className={`font-semibold text-2xl text-[#ccc] py-2 px-3 capitalize hover:text-primary transition-colors ${
                                activeTab === 'featured' ? 'active border-b ' : ''
                            }`}
                        >
                            Featured
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => handleTabClick('toprated')}
                            className={`font-semibold text-2xl text-[#ccc] py-2 px-3 capitalize hover:text-primary transition-colors ${
                                activeTab === 'toprated' ? 'active border-b ' : ''
                            }`}
                        >
                            Top Rated
                        </Link>
                    </li>
                </ul>

                <div>
                    {loading ? (
                        <div className="loading-spinner text-center">
                            <span className="loader block mt-20"></span>
                        </div>
                    ) : (
                        <Product data={filteredProducts} />
                    )}
                </div>
            </div>
        </section>
    );
}

export default Featured;
