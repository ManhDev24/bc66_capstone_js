import { product } from "../model/model.js";
import {
  addPhoneForm,
  getDataForm,
  renderData,
  showMessage,
} from "./controller-admin.js";
import { Validate } from "./validate.js";
let globalId = "";
const BASE_URL = "https://6641ed403d66a67b343575f2.mockapi.io/";
const adminEndpoint = "admin";

let fetchData = () => {
  axios
    .get(BASE_URL + adminEndpoint)
    .then((res) => {
      renderData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchData();

window.deleteProduct = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`${BASE_URL}${adminEndpoint}/${id}`).then((res) => {
        fetchData();
      });
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      return true;
    } else {
      return false;
    }
  });
};

window.createProduct = () => {
  addPhoneForm();
  let data = getDataForm();
  let { name, price, screen, backCamera, frontCamera, img, desc, type } = data;
  const newProduct = new product(
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );
  axios
    .post(`${BASE_URL}${adminEndpoint}`, newProduct)
    .then((res) => {
      $("#exampleModal").modal("hide");
      showMessage("Thêm sản phẩm thành công");
      fetchData();
    })
    .catch((err) => {
      showMessage("Thêm sản phẩm thất bại", false);
    });
};

window.editProduct = (id) => {
  globalId = id;
  axios
    .get(`${BASE_URL}${adminEndpoint}/${id}`)
    .then((res) => {
      let { name, price, screen, backCamera, frontCamera, img, desc, type } =
        res.data;
      document.getElementById("name").value = name;
      document.getElementById("price").value = price;
      document.getElementById("screen").value = screen;
      document.getElementById("backCam").value = backCamera;
      document.getElementById("frontCam").value = frontCamera;
      document.getElementById("img").value = img;
      document.getElementById("desc").value = desc;
      document.getElementById("type").value = type;
      $("#exampleModal").modal("show");
    })
    .catch((err) => {});
};
window.updateProduct = () => {
  let data = getDataForm();
  axios
    .put(`${BASE_URL}${adminEndpoint}/${globalId}`, data)
    .then((res) => {
      $("#exampleModal").modal("hide");
      showMessage("Cập nhật sản phẩm thành công");
      fetchData();
    })
    .catch((err) => {
      showMessage("Cập nhật sản phẩm thất bại", false);
    });
};
