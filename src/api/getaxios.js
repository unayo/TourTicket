export default(axios)=>({
    getMerchant(data) {
        return axios.post('/ctSys/getMerchant', data)
    },
    getItem(data) {
        return axios.post('/ctItem/get', data)
    }
})