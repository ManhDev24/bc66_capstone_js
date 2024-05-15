

const BASE_URL = "https://663ceb7117145c4d8c382eaf.mockapi.io/products";

// gọi api lấy danh sách sản phẩm ( lấy data từ sever )
function fetchProducts() {
    axios({
    url: BASE_URL,
    method: "GET",
}).then(function (res) {
    renderProducts(res.data)
}).catch(function (err) {
    console.log('err: ', err);
});
}

fetchProducts();