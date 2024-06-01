import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '~/components/Breadcrumb/Breadcrumb';
import ApiServices from '~/services/ApiServices';

const DetailContent = React.lazy(() => import('./DetailContent/DetailContent'));

function DetailProduct() {
    const [data, setData] = useState({});
    const { slug } = useParams();
    const getDataDetail = async () => {
        const response = await ApiServices.GET_PRODUCT_BY_NAME(slug);

        setData(response.data.data);
    };

    useEffect(() => {
        if (slug) {
            getDataDetail();
        }
    }, []);

    return (
        <main>
            <Breadcrumb name={data.title}>Product</Breadcrumb>
            <Suspense
                fallback={
                    <div className="loading-spinner text-center">
                        <span className="loader block mt-20"></span>
                    </div>
                }
            >
                <DetailContent data={data} />
            </Suspense>
        </main>
    );
}

export default DetailProduct;
