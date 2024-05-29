import ApiServices from '~/services/ApiServices';
import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDataProduct } from '~/redux/features/productSlice';
import Deals from './Deals/Deals';
import Brands from './Brands/Brands';
import Category from './Category/Category';
import Boxers from './Boxers/Boxers';
import Cta from './Cta/Cta';

const Sliders = React.lazy(() => import('./Sliders/Sliders'));
const Featured = React.lazy(() => import('./Featured/Featured'));

function Home() {
    const dispatch = useDispatch();

    const loadData = async () => {
        const response = await ApiServices.GET_ALL_PRODUCT();
        dispatch(setDataProduct(response.data.data.products));
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <main>
            <Suspense
                fallback={
                    <div className="loading-spinner text-center">
                        <span className="loader block mt-20"></span>
                    </div>
                }
            >
                <Sliders />
                <Featured />
                <Deals />
                <Brands />
                <Category />
                <Boxers />
                <Cta />
            </Suspense>
        </main>
    );
}

export default Home;
