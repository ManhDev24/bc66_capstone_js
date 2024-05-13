
const BASE_URL = "https://663ceb7117145c4d8c382eaf.mockapi.io/products";

axios({
    url : BASE_URL,
    method : "GET",
}).then(function (res) {
    console.log('res: ', res.data);
}).catch(function (err) {
    console.log('err: ', err);

});