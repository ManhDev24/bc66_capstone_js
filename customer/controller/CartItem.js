let cartItem = [];
let count = 0;

// Lấy dữ liệu từ localStorage render lên table
var dataJson = localStorage.getItem("CARTITEM");
if (dataJson !== null) {
  var dataRaw = JSON.parse(dataJson);
  for (let i = 0; i < dataRaw.length; i++) {
    let data = dataRaw[i];
    cartItem.push(data);
  }
  total();
  renderCartItem(cartItem);

}

// ADD TO CART
function addToCart(id) {
  let index = productsArr.findIndex(function (item) {
    return item.id == id;
  });
  let phoneAdd = productsArr[index];

  // Tìm xem sản phẩm đã có trong giỏ hàng chưa
  let cartIndex = cartItem.findIndex(function (item) {
    return item.id == id;
  });

  if (cartIndex === -1) {
    // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
    let phone = new Phone(
      phoneAdd.id,
      phoneAdd.name,
      phoneAdd.price,
      phoneAdd.screen,
      phoneAdd.backCamera,
      phoneAdd.frontCamera,
      phoneAdd.img,
      phoneAdd.desc,
      phoneAdd.type,
      phoneAdd.quantity
    );

    // Kiểm tra và thiết lập số lượng
    let count = phone.quantity;
    if (!count && count !== 0) {
      count = 1; // Khởi tạo số lượng là 1
    } else {
      count += 1;
    }
    phone.quantity = count;
    cartItem.push(phone);
  } else {
    // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
    cartItem[cartIndex].quantity += 1;
  }
  console.log('Giỏ hàng hiện tại: ', cartItem);
  // Lưu dữ liệu, hiển thị giỏ hàng và tính tổng số tiền
  saveDataJson();
  renderCartItem(cartItem);
  total();
  quantityCount();

}

// Icon Count
function quantityCount() {
  let totalQuantity = 0;
  for (let i = 0; i < cartItem.length; i++) {
    let quantityCount = cartItem[i].quantity
    console.log('quantityCount: ', quantityCount);
    totalQuantity += quantityCount
  }
  document.querySelector(".iconCount").innerText = totalQuantity;

}
quantityCount();

// Render CartItem
function renderCartItem(cartItem) {
  let contentHTML = "";
  cartItem.forEach(function (item) {
    let trString =
      `<div class="productCart-card w-full align-items-center">
          <div class="cartItem flex align-items-center">
            <img src="${item.img}" alt="img_${item.name}">

            <div class="titleCart">
              <h3 class="text-xl font-bold align-left">${item.name}</h3>
            </div>  

            <div class="align-left text-sm w-full">
             <ul class="list-disc">
               <li><span>Màn hình:</span>${item.screen}</li>
               <li><span>Camera trước:</span>${item.frontCamera}</li>
               <li><span>Camera sau:</span>${item.backCamera}</li>
             </ul>
            </div>

            <div class="align-items-center w-full">
              <div class="text-2xl font-monospace text-center" style="color: red;">${item.price.toLocaleString()}$</div>
            </div>

          </div>

          <div class="align-items-center flex justify-content-between ml-5">
            <div class="quantityResult text-sm font-monospace ">
             <span> <b>Quantity:</b> </span>
             <span class="plus bg-succes" onclick="minus('${item.id}')">-</span>
             <span class="mx-2 text-sm">${item.quantity}</span>
             <span class="plus bg-succes" onclick="plus('${item.id}')">+</span>
             </div>
            <div class="text-sm font-monospace "><a href="#!" onclick="deleteProduct('${item.id}')">Xóa</a></div>
          </div>

        </div>`
    contentHTML += trString;
  });
  document.getElementById("cartList").innerHTML = contentHTML;

}

// Minus
function minus(id) {

  let index = cartItem.findIndex(function (phone) {
    return phone.id == id;
  });
  let cartItemIndex = cartItem[index]
  if (cartItem) {
    cartItemIndex.quantity--
  }
  // Loại bỏ các mục có số lượng bằng 0 khỏi giỏ hàng
  cartItem = cartItem.filter((ele) => ele.quantity != 0);

  saveDataJson();
  renderCartItem(cartItem);
  total();
}

// Plus
function plus(id) {
  let index = cartItem.findIndex(function (phone) {
    return phone.id == id;
  });
  let cartItemIndex = cartItem[index]
  if (cartItem) {
    cartItemIndex.quantity++
  }
  saveDataJson();
  renderCartItem(cartItem);
  total();
}

//Remove product
function deleteProduct(id) {
  let index = cartItem.findIndex(function (phone) {
    return phone.id == id;
  });

  cartItem.splice(index, 1);
  saveDataJson();
  renderCartItem(cartItem);
  total();

}

// Delete all products
function deleteAllProduts() {
  cartItem.splice(0, cartItem.length);
  saveDataJson();
  renderCartItem(cartItem);
  total();
  quantityCount();

}

// Total products
function total() {

  let total = 0;
  for (let i = 0; i < cartItem.length; i++) {
    let phonePrice = cartItem[i].price * cartItem[i].quantity
    total += phonePrice

  }

  if (total === 0) {
    return document.getElementById("priceTotal").innerText = `0 $`
  } else {
    return document.getElementById("priceTotal").innerText = `${total.toLocaleString()} $`

  }

}

// Thanh toán
function payNow() {
  if (cartItem.length === 0) {
    Swal.fire({
      title: "Giỏ hàng trống",
      text: "Hãy thêm sản phẩm",
      icon: "question"
    });
  } else {
    Swal.fire({
      title: "Thanh toán thành công!",
      text: "Đơn hàng đang kiểm duyệt",
      icon: "success"
    });
  }

  deleteAllProduts();

}

