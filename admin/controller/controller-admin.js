export let renderData = (data) => {
  let ContentHtml = "";
  data.reverse().map((item) => {
    let { id, name, price, img, desc } = item;
    let trString = `
        <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${price}$</td>
        <td>${img}</td>
        <td>${desc}</td>
        <td >
        <div class="d-flex" >
        <button onclick="deleteProduct(${id})" class="btn btn-danger me-2 ">Xóa
        </button>
        <button onclick="editProduct(${id})" class="btn btn-warning ">Sửa
        </button>
        </div>
        </td>
        </tr>
        `;
    ContentHtml += trString;
  });
  document.getElementById("tablePhone").innerHTML = ContentHtml;
};

export let getDataForm = () => {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let screen = document.getElementById("screen").value;
  let backCamera = document.getElementById("backCam").value;
  let frontCamera = document.getElementById("frontCam").value;
  let img = document.getElementById("img").value;
  let desc = document.getElementById("desc").value;
  let type = document.getElementById("type").value;

  return {
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type,
  };
};

export let showMessage = (message, check = true) => {
  Toastify({
    text: message,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: check
        ? "linear-gradient(to right, #00b09b, #96c93d)"
        : "linear-gradient(to right, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};

window.resetForm = () => {
  document.getElementById("formPhone").reset();
};

export let addPhoneForm = () => {
  const addPhoneBtn = document.getElementById("addPhoneForm");
  addPhoneBtn.addEventListener("click", () => {
    console.log("hi");

    resetForm();

    document.getElementById("btnUpdate").style.display = "none";

    document.getElementById("btnAddPhone").style.display = "inline-block";
  });
};
