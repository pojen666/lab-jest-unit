import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://dc24021a-3a9e-4732-b79c-bfb72d30fee6.mock.pstmn.io',
});
instance.defaults.headers.get['Accept'] = 'application/json';

export default instance;