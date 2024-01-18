function laSoNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
let mangSoNguyen = [2, 3, 4, 5, 8, 11, 13, 17, 20, 23];
console.log("Các số nguyên tố trong mảng:");
for (let i = 0; i < mangSoNguyen.length; i++) {
    if (laSoNguyenTo(mangSoNguyen[i])) {
        console.log(mangSoNguyen[i]);
    }
}
