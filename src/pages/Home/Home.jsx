import ApiServices from '~/services/ApiServices';
import Featured from './Featured/Featured';
import Sliders from './Sliders/Sliders';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDataProduct } from '~/redux/features/productSlice';
import Deals from './Deals/Deals';
import Brands from './Brands/Brands';
import Category from './Category/Category';
import Boxers from './Boxers/Boxers';
import Cta from './Cta/Cta';

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
            <Sliders />
            <Featured />
            <Deals />
            <Brands />
            <Category />
            <Boxers />
            <Cta />
        </main>
    );
}

export default Home;
