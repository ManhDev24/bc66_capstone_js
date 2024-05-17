// messageSwitch = (isFalse, idTB, message = "") => {
//   if (isFalse == false) {
//     getEle(idTB).style.display = "block";
//     getEle(idTB).innerHTML = message;
//     return false;
//   } else if (isFalse == true) {
//     getEle(idTB).innerHTML = "&#8205"; //invisible (to keep distance between forms unchanged)
//     return true;
//   }
// };
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

// const getEle = (id) => document.getElementById(id);

// export class Validate {
//   numRegex = /^[0-9]+$/;

//   messageSwitch = (isFalse, idTB, message = "") => {
//     if (isFalse == false) {
//       getEle(idTB).style.display = "block";
//       getEle(idTB).innerHTML = message;
//       return false;
//     } else if (isFalse == true) {
//       getEle(idTB).innerHTML = "&#8205"; //invisible (to keep distance between forms unchanged)
//       return true;
//     }
//   };

//   isNotEmpty(id, idTB) {
//     let text = getEle(id).value.trim();
//     return text == ""
//       ? this.messageSwitch(false, idTB, `(*)This field can't be empty`)
//       : this.messageSwitch(true, idTB);
//   }

//   isSelected(id, idTB) {
//     let theSelect = getEle(id);
//     return theSelect.selectedIndex == 0
//       ? this.messageSwitch(false, idTB, "(*)Please select one option")
//       : this.messageSwitch(true, idTB);
//   }

//   isMatch(id, idTB, format) {
//     let text = getEle(id).value;
//     return !text.match(format)
//       ? this.messageSwitch(false, idTB, "(*)Price must be a number")
//       : this.messageSwitch(true, idTB);
//   }

//   isNotExist(phoneList, isUpdate = false) {
//     if (isUpdate) return this.messageSwitch(true, "tbname");
//     for (let i = 0; i < phoneList.length; i++) {
//       if (phoneList[i].name == getEle("name").value) {
//         return this.messageSwitch(
//           false,
//           "tbname",
//           "(*)This phone already exist"
//         );
//       }
//     }
//     return this.messageSwitch(true, "tbname");
//   }

//   isValid(phoneList, isUpdate) {
//     let valid = true;
//     valid &=
//       this.isNotEmpty("name", "tbname") && this.isNotExist(phoneList, isUpdate);
//     console.log("valid: ", this.isNotExist(phoneList, isUpdate));
//     valid &=
//       this.isNotEmpty("price", "tbprice") &&
//       this.isMatch("price", "tbprice", this.numRegex);

//     valid &= this.isNotEmpty("screen", "tbscreen");
//     valid &= this.isNotEmpty("backCam", "tbbackCam");
//     valid &= this.isNotEmpty("frontCam", "tbfrontCam");
//     valid &= this.isNotEmpty("img", "tbimg");
//     valid &= this.isNotEmpty("desc", "tbdesc");
//     valid &= this.isSelected("type", "tbtype");
//     return valid;
//   }
// }
