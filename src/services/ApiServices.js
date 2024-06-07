import axios from 'axios';

const URL = ' https://cfdshop.cfdcircle.vn/api/v1/products';

const ApiServices = {
    GET_ALL_PRODUCT: async () => {
        return await axios(URL);
    },
    GET_PRODUCT_BY_NAME: async (slug) => {
        return await axios(`${URL}/${slug}`);
    },
    GET_PRODUCT_PAGINATE: async (limit, page) => {
        return await axios(`${URL}?limit=${limit}&page=${page}`);
    },
};

export default ApiServices;
