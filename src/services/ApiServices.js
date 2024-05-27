import axios from 'axios';

const URL = ' https://cfdshop.cfdcircle.vn/api/v1/products';

const ApiServices = {
    GET_ALL_PRODUCT: async () => {
        return await axios(URL);
    },
};

export default ApiServices;
