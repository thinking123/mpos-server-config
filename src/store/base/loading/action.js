export const startLoading = (text) => {
    return {
        type: 'CRE_START_LOADING',
        text
    };
};

export const endLoading = () => {
    return {
        type: 'CRE_END_LOADING',
    };
};