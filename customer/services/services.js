let productService = {
    getList: function () {
        return axios.get(BASE_URL);
    }
}