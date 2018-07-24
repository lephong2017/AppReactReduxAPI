import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApi_S(endpoint, method = 'GET', body) {
    return axios({
        method,
        url: `${Config.API_URL_S}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}