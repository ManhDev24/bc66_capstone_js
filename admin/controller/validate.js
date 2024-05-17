export let isEmpty = (id, value) => {
  if (value.length > 0) {
    document.querySelector(id).style.display = "none";
    document.querySelector(id).innerHTML = "";
    return true;
  }
  document.querySelector(id).innerHTML = "(*)không được để trống ";
  document.querySelector(id).style.display = "inline-block";
  return false;
};

export let isNumber = (id, value) => {
  let pattern = /^[-+]?[0-9]+(.[0-9]+)?$/;
  if (pattern.test(value)) {
    document.querySelector(id).style.display = "none";
    return true;
  }
  document.querySelector(id).innerHTML = "(*)phải là số";
  document.querySelector(id).style.display = "inline-block";
  return false;
};

export let isExitPhone = (id, array, value) => {
  value = value.toLowerCase().replace(/\s/g, "");

  let isExist = false;

  for (let item of array) {
    let lowercaseItem = item.toLowerCase().replace(/\s/g, "");

    if (lowercaseItem === value) {
      isExist = true;
      break;
    }
  }

  if (isExist) {
    document.querySelector(id).innerHTML = "(*)đã tồn tại";
    document.querySelector(id).style.display = "inline-block";
    return false;
  }

  return true;
};
export let isExitPhoneUpdate = (id, array, value) => {
  let arrayClone = array.filter((item) => item !== value);
  value = value.toLowerCase().replace(/\s/g, "");

  let isExist = false;

  for (let item of arrayClone) {
    let lowercaseItem = item.toLowerCase().replace(/\s/g, "");

    if (lowercaseItem === value) {
      isExist = true;
      break;
    }
  }

  if (isExist) {
    document.querySelector(id).innerHTML = "(*)đã tồn tại";
    document.querySelector(id).style.display = "inline-block";
    return false;
  }

  return true;
};

export let isRightBand = (id, value) => {
  let element = document.querySelector(id); // Tìm phần tử trong DOM

  if (value == "Apple") {
    element.innerHTML = ``;
    element.style.display = "none";
    return true;
  }
  if (value == "Android") {
    element.innerHTML = ``;
    element.style.display = "none";
    return true;
  }

  element.innerHTML = `Sai brand`;
  element.style.display = "inline-block";
  return false;
};
