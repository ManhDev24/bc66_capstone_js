import { product } from "../model/model.js";
import {
  getDataForm,
  renderData,
  resetForm,
  showMessage,
} from "./controller-admin.js";
import { globalName } from "./controller-admin.js";
import {
  isEmpty,
  isExitPhone,
  isExitPhoneUpdate,
  isNumber,
  isRightBand,
} from "./validate.js";
let globalId = "";
let globalObject = [];
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
document.getElementById("addPhoneForm").onclick = () => {
  resetForm();
  document.getElementById("btnUpdate").style.display = "none";
  document.getElementById("btnAddPhone").style.display = "inline-block";
};
window.createProduct = () => {
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
  let phoneName =
    isEmpty("#tbName", name) && isExitPhone("#tbName", globalName, name);
  let phoneNumber = isEmpty("#tbPrice", price) && isNumber("#tbPrice", price);
  let phoneScreen = isEmpty("#tbScreen", screen);
  let phoneBackCam = isEmpty("#tbBackCam", backCamera);
  let phoneFrontCam = isEmpty("#tbFrontCam", frontCamera);
  let phoneImg = isEmpty("#tbImg", img);
  let phoneDesc = isEmpty("#tbDesc", desc);
  let phoneBrand = isRightBand("#tbtype", type);
  let check =
    phoneName &&
    phoneNumber &&
    phoneScreen &&
    phoneBackCam &&
    phoneFrontCam &&
    phoneImg &&
    phoneDesc &&
    phoneBrand;

  if (!check) return;
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
  document.getElementById("btnUpdate").style.display = "inline-block";
  document.getElementById("btnAddPhone").style.display = "none";
  let elements = document.querySelectorAll(".sp-thongbao");
  elements.forEach((item) => {
    item.textContent = "";
  });
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
  let { name, price, screen, backCamera, frontCamera, img, desc, type } = data;
  let phoneName =
    isEmpty("#tbName", name) && isExitPhoneUpdate("#tbName", globalName, name);

  let phoneNumber = isEmpty("#tbPrice", price) && isNumber("#tbPrice", price);
  let phoneScreen = isEmpty("#tbScreen", screen);
  let phoneBackCam = isEmpty("#tbBackCam", backCamera);
  let phoneFrontCam = isEmpty("#tbFrontCam", frontCamera);
  let phoneImg = isEmpty("#tbImg", img);
  let phoneDesc = isEmpty("#tbDesc", desc);
  let phoneBrand = isRightBand("#tbtype", type);
  let check =
    phoneName &&
    phoneNumber &&
    phoneScreen &&
    phoneBackCam &&
    phoneFrontCam &&
    phoneImg &&
    phoneDesc &&
    phoneBrand;

  if (!check) return;
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
export {globalObject}