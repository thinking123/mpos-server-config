export const httpConfig = {
    baseUrl:'http://localhost:9082/cre-pos/service',
};


export const fetchConfig = {
    method:'GET',
    // credentials: 'include',
    mode: 'cors',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        // // 'Access-Control-Allow-Origin':'*'
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
    },
    // cache: 'default'
}