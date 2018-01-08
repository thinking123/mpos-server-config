import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'


let mock = new MockAdapter(axios , { delayResponse: 2000 });




mock.onPost('/login').reply(config=>{
    console.log(config)
    const {account , password} = JSON.parse(config.data)

    return [200 , {
        data:{
            token:'test of token'
        },
        status:'200'
    }]
    //
    // if(account == 'test' && password == "123"){
    //     return [200 , {
    //         data:{
    //             token:'test of token'
    //         },
    //         status:'200'
    //     }]
    // }else{
    //     return [401 , {
    //         data:{
    //             message:'login error'
    //         },
    //         status:'401'
    //     }]
    // }

})


axios.defaults.timeout = 20000;
axios.defaults.baseURL = '/';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});


export default axios