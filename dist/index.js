"use strict";
/**
 * Cách khai báo kiểu dữ liệu:
 * - gắn kiểu dữ liệu sau tên biến.
 */
let age = 20;
age = 21; // ✅
age = "Hai muoi"; //❌
age = true; //❌
// -- Kiểu dữ liệu --
// ? có bao nhiêu kiểu dữ liệu trong js
// (1) primitive type ---- (2) non-primitive type (Object - Reference type)
// (1) string, number, boolean, null, undefined, Symbol, BigInt.
// (2) object, array
let username = "Nguyen Van A";
username = "Nguyen Van B"; //✅
username = 10; //❌
let isStudent = true;
isStudent = false; // ✅
isStudent = 10; // ❌
let nll = null;
nll = 10; // ❌
nll = "aaa"; // ❌
let unf = undefined;
unf = 10; // ❌
let numbers = [1, 2, 3, 4];
numbers.push(5); // ✅
numbers.push("aaaa"); // ❌
// -- #Lưu ý --
// const toan = Number(event.target.value);
// - Kiểu dữ liệu mặc định của typescript: bắt đầu bằng chữ thường.
// - Ép kiểu dữ liệu trong javascript: bắt đầu bằng chữ in hoa.
//===========================
// Tự động ngầm hiểu kiểu dữ liệu. Khi các bạn không khai báo cho nó.
let age_2 = 10;
age_2 = ""; // ❌
let username_2 = "Nguyen Van A";
username_2 = 10; // ❌
//===========================
// union: kết hợp -> dùng dấu: | -> chỉ 1 dấu duy nhất
let id = 11212;
id = "11212";
let productId = 34343;
productId = "fasdfasd";
let phoneId = 54545;
//===========================
let laptopId = 10;
laptopId = "hihi";
laptopId = true; // ❌
//===========================
// ** any **: anything -> gì cũng được
// ## Ít dùng nhất có thể.
let age_3 = 10;
age_3 = true;
age_3 = [1, 2, 2];
age_3 = "dfadsf";
let product = {
    id: "12121",
    name: "m1",
    nsx: "26/2/2024",
};
let product_2 = {
    id: "4543",
    name: "m2",
    nsx: "27/2/2024",
};
// Ngầm hiểu.
let product_3 = {
    id: "4543",
    name: "m2",
    nsx: "27/2/2024",
};
const prd_4 = {
    id: "12121",
    name: "mac4",
    nsx: "28/2/2024",
};
const prd_5 = {
    id: "12121",
    name: "mac4",
    nsx: "28/2/2024",
    nhh: "29/2/2024",
};
const dog = {
    id: 1212,
    canFly: false,
    canSwim: true,
    chan: 4,
    loai: "cho",
};
//===========================
// function
function calcSum(a, b) {
    return 3;
}
const calcSum_2 = (a, b) => {
    return 3;
};
const calcSum_3 = (a, b) => {
    return a + b;
};
calcSum_3(1, 2); // ✅
calcSum_3(1, ""); // ❌
const prd_6 = {
    id: 12121,
    name: "hihi",
    nsx: "27/2/2024",
};
//===========================
// generic: Không gắn kiểu dữ liệu trực tiếp khi khai báo function hay object.
// kiểu dữ liệu sẽ phụ thuộc vào người sử dụng.
function print(a) {
    console.log(a);
}
print("232");
print(121);
print(121);
print("121");
print(121);
print("121");
const prd_7 = {
    id: 1212,
    name: "121",
};
const prd_8 = {
    id: 1212,
    name: 121212,
};
const prd_9 = {
    id: 1212,
    name: 121212,
};
//===========================
// alias: rằng buộc kiểu dữ liệu
// Muốn khẳng cho ts biết là h1Ele chắc chắn là HTMLHeadingEle
// document.querySelector("h1") lấy về sẽ có kiểu dữ liệu là HTMLHeadElement
const h1Ele = document.querySelector("h1");
// !: khẳng định có 100%, not null
const root = document.getElementById("root");
root === null || root === void 0 ? void 0 : root.append("hihi"); // kiểm tra root có khác null hay undefined hay không rồi mới thực thi phía sau (JS | TS)
root.append("hihi"); // khẳng định root không bao giờ là null (TS)
const laptop = {
    a: "fasdfas",
    b: "fasdfasd",
    c: 1212,
};
