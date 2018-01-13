import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import 'babel-polyfill' // polyfill for regenerator runtime ,then you can use async in action
import store from 'src/store'
import {loading} from 'src/store/base/loading/action'

let mock = new MockAdapter(axios , { delayResponse: 2000 });




mock.onPost('/authen/login').reply(config=>{
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


let timer = []
const begin = (dispatch) => {
    //延迟100ms 显示loading bar
    timer.push(setTimeout(() => {
        dispatch(loading(true))
    }, 100))

}
const end = (dispatch) => {
    //如果没有到100ms，直接clear begin的timer
    clearTimeout(timer.splice(0, 1))
    dispatch(loading(false))
}

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    begin(store.dispatch)
    return config;
}, function (error) {
    // Do something with request error
    end(store.dispatch)
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    end(store.dispatch)
    return response;
}, function (error) {
    // Do something with response error
    end(store.dispatch)
    return Promise.reject(error);
});


export default axios