import { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ReactPaginate from 'react-paginate';
// import { useSelector } from 'react-redux';

import ProductItem from '~/components/Product/ProductItem/ProductItem';
import ApiServices from '~/services/ApiServices';

function ProductContent() {
    const [products, setProducts] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [totalProduct, settotalProduct] = useState(0);
    const [showToggle, setShowToggle] = useState(false);
    // const products = useSelector((state) => state.dataProduct.products);
    const categories = products.map((item) => item.category.name);
    const uniqueCategories = [...new Set(categories)];

    const [checkedCategories, setCheckedCategories] = useState({});
    const [sortCriteria, setSortCriteria] = useState('mostPopular');

    const loadDataProduct = async (limit, page) => {
        const response = await ApiServices.GET_PRODUCT_PAGINATE(limit, page);
        const { products, pagination } = response.data.data;
        let pageTotal = Math.ceil(pagination.total / pagination.limit);
        setProducts(products);
        setTotalPage(pageTotal);
        settotalProduct(pagination.total);
    };

    useEffect(() => {
        loadDataProduct(9, 1);
    }, []);

    const handleCheckboxChange = (category) => {
        setCheckedCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    const handleClearAll = () => {
        const newCheckedCategories = {};
        uniqueCategories.forEach((category) => {
            newCheckedCategories[category] = false;
        });
        setCheckedCategories(newCheckedCategories);
    };

    const handleSortChange = (event) => {
        setSortCriteria(event.target.value);
    };

    const filterProducts = () => {
        let filteredProducts = products;

        if (Object.values(checkedCategories).some((value) => value)) {
            filteredProducts = products.filter((product) => checkedCategories[product.category.name]);
        }

        switch (sortCriteria) {
            case 'priceLowToHigh':
                filteredProducts = filteredProducts.slice().sort((a, b) => a.price - b.price);
                break;
            case 'priceHighToLow':
                filteredProducts = filteredProducts.slice().sort((a, b) => b.price - a.price);
                break;
            case 'mostPopular':
            default:
                break;
        }

        return filteredProducts;
    };

    const handlePageClick = (e) => {
        loadDataProduct(9, +e.selected + 1);
    };

    const filteredAndSortedProducts = filterProducts();

    return (
        <section className="page-wrapper flex gap-5">
            <div className="w-1/4 hidden lg:block">
                <div className="flex pt-[6px] pb-5 mb-5 justify-between border-b border-gray">
                    <span className="text-sm text-[#1a1a1a]">Filters:</span>
                    <button className="text-xs" onClick={handleClearAll}>
                        Clean All
                    </button>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg">Category</h3>
                        <button onClick={() => setShowToggle(!showToggle)}>
                            {!showToggle ? (
                                <FiChevronDown className="w-5 h-5 text-[#1a1a1a]" />
                            ) : (
                                <FiChevronUp className="w-5 h-5 text-[#1a1a1a]" />
                            )}
                        </button>
                    </div>

                    <div className={`pt-[10px] pb-[20px] ${!showToggle ? 'opacity-1' : 'opacity-0'}`}>
                        {uniqueCategories?.map((category, index) => (
                            <div key={index} className="text-[#1a1a1a] text-sm flex items-center gap-3 mb-2">
                                <input
                                    type="checkbox"
                                    id={category}
                                    className="w-4 h-4"
                                    checked={checkedCategories[category] || false}
                                    onChange={() => handleCheckboxChange(category)}
                                />
                                <label htmlFor={category}>{category}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="lg:w-3/4 w-full">
                <div className="flex pt-[6px] mb-5 lg:justify-between items-center gap-2 lg:items-start lg:flex-row flex-col ">
                    <div className="text-sm text-[#ccc]">
                        Showing{' '}
                        <span className="text-[#1a1a1a]">
                            {filteredAndSortedProducts.length} of {totalProduct}
                        </span>{' '}
                        Products
                    </div>
                    <div className="text-sm flex items-center gap-2">
                        <span className="text-xs text-[#1a1a1a]">Sort by:</span>
                        <select
                            name="sort"
                            id="sort"
                            value={sortCriteria}
                            onChange={handleSortChange}
                            className="border max-w-[180px] min-w-[140px] border-gray outline-none cursor-pointer py-[4.5px] px-[10px] text-[#999]"
                        >
                            <option value="mostPopular">Most Popular</option>
                            <option value="priceLowToHigh">Price Low to High</option>
                            <option value="priceHighToLow">Price High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {filteredAndSortedProducts.map((item) => (
                        <div key={item?.id} className="mx-auto">
                            <ProductItem item={item} />
                        </div>
                    ))}
                </div>

                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={1}
                    pageCount={totalPage}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </section>
    );
}

export default ProductContent;
