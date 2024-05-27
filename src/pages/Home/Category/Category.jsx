import { useState } from 'react';
import { useSelector } from 'react-redux';
import Product from '~/components/Product/Product';

function Category() {
    const products = useSelector((state) => state.dataProduct.products);

    const [selectedCategory, setSelectedCategory] = useState('All');

    const categorys = products.map((item) => item.category.name);
    const uniqueCategorys = ['All', ...new Set(categorys)];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts =
        selectedCategory === 'All'
            ? products
            : products.filter((product) => product.category.name === selectedCategory);

    return (
        <section className="page-wrapper">
            <div className="py-[50px] border-[#ebebeb] border-b">
                <div>
                    <div className="flex lg:flex-row flex-col gap-2 items-center justify-between mb-[30px]">
                        <h2 className="text-[28px] text-black font-semibold">Featured Products</h2>
                        <div className="flex flex-wrap justify-center gap-2 text-sm text-[#777]">
                            {uniqueCategorys?.map((item) => (
                                <button
                                    key={item}
                                    className={`py-[5px] px-[10px] uppercase ${
                                        selectedCategory === item
                                            ? 'text-primary border-primary border-b transition-colors'
                                            : ''
                                    }`}
                                    onClick={() => handleCategoryClick(item)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Product data={filteredProducts} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Category;
