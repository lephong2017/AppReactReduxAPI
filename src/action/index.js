let axios = require('axios');
const API = 'http://demowebaspnetcore.azurewebsites.net';
const DEFAULT_QUERY = '/api/Customer/getAllCustomer';
//reducer to indicate that our api call has started
export let startDevSearch = () => {
    return {
        type : 'Start_Dev_Search'
    }
}

// reducer to indicate we have received all our data from the api
export let endDevSearch = (devsArray) => {
    return {
        type : 'End_Dev_Search',
        devsArray
    }
}


//here we actually do the fetching
export let fetchDev = () => {
    let url = API+DEFAULT_QUERY;
    return (dispatch) => {
        dispatch(startDevSearch())
        return axios.get(url).then(
            (response) => {
                let devsArr = response.data
                dispatch(endDevSearch(devsArr))
                console.log(devsArr)
            },
            (err) => {
                console.log(err);
            }
        )

    }
}