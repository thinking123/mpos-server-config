export const startLoading = (text) => {
    return {
        type: 'CRE_START_LOADING',
        isLoading:true,
        text
    };
};

export const endLoading = () => {
    return {
        type: 'CRE_END_LOADING',
        isLoading:false
    };
};

export const loading = (isLoading)=>{
    return {
        type: 'CRE_LOADING',
        isLoading
    };
}