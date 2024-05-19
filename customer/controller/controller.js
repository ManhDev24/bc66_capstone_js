

// Lấy value từ select
function getSelectedFilterValue() {
  const filterSelect = document.getElementById("productFilter");
  return filterSelect.value;

}

// Lọc sản phẩm theo loại
function filterProductsByType(type) {
  if (type === "all") {
    return productsArr;
  } else {
    return productsArr.filter(product => product.type.toLowerCase() === type);
  }

}

// Render sản phẩm theo loại 
function filterProducts() {
  let filterValue = getSelectedFilterValue();
  let filteredProducts = filterProductsByType(filterValue);
  renderProducts(filteredProducts);

}

// lưu dữ liệu xuống LocalStorage
function saveDataJson() {
  var dataJson = JSON.stringify(cartItem);
  localStorage.setItem("CARTITEM", dataJson);
  return cartItem;
}