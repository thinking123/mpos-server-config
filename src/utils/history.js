import createHistory from 'history/createBrowserHistory'

//必须设置basename属性，否则 history不能使用
export default createHistory({basename:'/'})