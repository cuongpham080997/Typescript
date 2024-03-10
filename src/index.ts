/**
 * Cách khai báo kiểu dữ liệu:
 * - gắn kiểu dữ liệu sau tên biến.
 */
let age: number = 20;
age = 21; // ✅
age = "Hai muoi"; //❌
age = true; //❌

// -- Kiểu dữ liệu --
// ? có bao nhiêu kiểu dữ liệu trong js
// (1) primitive type ---- (2) non-primitive type (Object - Reference type)
// (1) string, number, boolean, null, undefined, Symbol, BigInt.
// (2) object, array
let username: string = "Nguyen Van A";
username = "Nguyen Van B"; //✅
username = 10; //❌

let isStudent: boolean = true;
isStudent = false; // ✅
isStudent = 10; // ❌

let nll: null = null;
nll = 10; // ❌
nll = "aaa"; // ❌

let unf: undefined = undefined;
unf = 10; // ❌

let numbers: number[] = [1, 2, 3, 4]; //* Cách 1
let numbers2: Array<number> = [1,2,3,4] //*Cách 2
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
let id: string | number = 11212;
id = "11212";

let productId: string | number = 34343;
productId = "fasdfasd";

let phoneId: string | number = 54545;

//===========================
// Tự tạo cho mình kiểu dữ liệu riêng, bên cạnh những kiểu dữ liệu có sẵn của typescript: string, number, boolean, null, undefined,...
// type: để tạo ra một kiểu dữ liệu mới.

// PascalCase
type TStringAndNumber = string | number;

//===========================
let laptopId: TStringAndNumber = 10;
laptopId = "hihi";
laptopId = true; // ❌

//===========================
// ** any **: anything -> gì cũng được
// ## Ít dùng nhất có thể.
let age_3: any = 10;
age_3 = true;
age_3 = [1, 2, 2];
age_3 = "dfadsf";

//===========================
// Khai báo kiểu dữ liệu với object
/**
 * product
 * - id: string hoặc number
 * - name: string
 * - nsx: string
 */

type TProduct = {
  id: string | number;
  name: string;
  nsx: string;
};

let product: TProduct = {
  id: "12121",
  name: "m1",
  nsx: "26/2/2024",
};

let product_2: TProduct = {
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

//===========================
/**
 * product
 * - id: string hoặc number
 * - name: string
 * - nsx: string
 * - nhh: có thể điền cũng được, không điền cũng không sao.
 */
type TProduct2 = {
  id: string | number;
  name: string;
  nsx: string;
  nhh?: string; // optional -> không có cũng được mà có là phải đúng kiểu dữ liệu cho chúng ta.
};

const prd_4: TProduct2 = {
  id: "12121",
  name: "mac4",
  nsx: "28/2/2024",
};

const prd_5: TProduct2 = {
  id: "12121",
  name: "mac4",
  nsx: "28/2/2024",
  nhh: "29/2/2024",
};
//===========================
/**
 * @BàiTập
 *
 * TAnimal
 * - id: string, number,
 * - chan: 2, 4
 * - loai: "chim", "cho", "meo"
 * - canFly: boolean
 * - canSwim: boolean
 * - tuoi: không cần khai báo cũng được. Nếu có thì phải là số
 */

// Literal type: được phép có những giá trị được liệt kê cụ thể.
type TAnimal = {
  id: string | number;
  canFly: boolean;
  canSwim: boolean;
  tuoi?: number;
  chan: 2 | 4; // -1, -2, -3, 3, 5
  loai: "chim" | "cho" | "meo";
};

const dog: TAnimal = {
  id: 1212,
  canFly: false,
  canSwim: true,
  chan: 4,
  loai: "cho",
};
//===========================
// function
function calcSum(a: number, b: number): number {
  return 3;
}

// -- Khai báo kiểu dữ liệu function
type TCalcSum = (a: number, b: number) => number;

const calcSum_2: TCalcSum = (a, b) => {
  return 3;
};

const calcSum_3 = (a: number, b: number): number => {
  return a + b;
};

calcSum_3(1, 2); // ✅
calcSum_3(1, ""); // ❌
//===========================
// interface
// gộp kiểu dữ liệu: &
// generic
//===========================
// interface tương tự với type.
// interface: dùng để khai báo kiểu dữ liệu cho đối tượng.
// interface khai báo trùng tên nhau sẽ gộp những thuộc tính lại với nhau.

interface IProduct {
  id: string | number;
  name: string;
}

interface IProduct {
  nsx: string;
}

const prd_6: IProduct = {
  id: 12121,
  name: "hihi",
  nsx: "27/2/2024",
};

// ** Điểm khác nhau interface vs type
// - interface: chỉ để khai báo cho đối tượng
// - type: khai báo tạo ra một kiểu dữ liệu mới

// - interface: khai báo trùng tên nhau được.
// - type: không thể khai báo trùng tên nhau.

//===========================
// &: gộp những thuộc tính của type lại với nhau
// Khi khai báo kiểu dữ liệu object với từ khóa type
type TId = {
  id: string | number;
};

type TName = {
  name: string;
};

/**
 * {
 *      id: string | number;
 *      name: string;
 * }
 */
type TProduct3 = TId & TName;
//===========================
// generic: Không gắn kiểu dữ liệu trực tiếp khi khai báo function hay object.
// kiểu dữ liệu sẽ phụ thuộc vào người sử dụng.

function print<Type>(a: Type) {
  console.log(a);
}

print<number>("232");
print<number>(121);

print<string>(121);
print<string>("121");

print(121);
print("121");
// --
type TProduct4<T> = {
  id: string | number;
  name: T;
};

const prd_7: TProduct4<number> = {
  id: 1212,
  name: "121",
};
const prd_8: TProduct4<number> = {
  id: 1212,
  name: 121212,
};
const prd_9: TProduct4<number> = {
  id: 1212,
  name: 121212,
};
//===========================
// alias: rằng buộc kiểu dữ liệu

// Muốn khẳng cho ts biết là h1Ele chắc chắn là HTMLHeadingEle
// document.querySelector("h1") lấy về sẽ có kiểu dữ liệu là HTMLHeadElement
const h1Ele = document.querySelector("h1") as HTMLHeadElement;

// !: khẳng định có 100%, not null
const root = document.getElementById("root");
root?.append("hihi"); // kiểm tra root có khác null hay undefined hay không rồi mới thực thi phía sau (JS | TS)

root!.append("hihi"); // khẳng định root không bao giờ là null (TS)

// ---
type TLaptop = {
  name: string;
  id: string;
  nsx: string;
};

type TLaptop2 = Record<string, string>;
const laptop: TLaptop2 = {
  a: "fasdfas",
  b: "fasdfasd",
  c: 1212,
};
