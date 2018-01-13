import fetchMock from 'fetch-mock'

console.log('start mock data')

fetchMock.get('*' , {
    token:'test token1234234',
    account:'test'
})