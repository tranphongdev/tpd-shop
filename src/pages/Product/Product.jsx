import Breadcrumb from '~/components/Breadcrumb/Breadcrumb';
// import ProductContent from './ProductContent/ProductContent';
import React, { Suspense, useEffect } from 'react';

const ProductContent = React.lazy(() => import('./ProductContent/ProductContent'));

function Product() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <div className="page-header">
                <h3 className="text-[#1a1a1a] text-4xl">Product</h3>
            </div>
            <Breadcrumb>Product</Breadcrumb>
            <Suspense
                fallback={
                    <div className="loading-spinner text-center">
                        <span className="loader block mt-20"></span>
                    </div>
                }
            >
                <ProductContent />
            </Suspense>
        </main>
    );
}

export default Product;
