function laTamGiac(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}
function demTamGiac(mang) {
    let dem = 0;
    for (let i = 0; i < mang.length - 2; i++) {
        for (let j = i + 1; j < mang.length - 1; j++) {
            for (let k = j + 1; k < mang.length; k++) {
                if (laTamGiac(mang[i], mang[j], mang[k])) {
                    dem++;
                }
            }
        }
    }
    return dem;
}
let mangSoNguyenDuong = [4, 6, 3, 7];
let ketQua = demTamGiac(mangSoNguyenDuong);
console.log(`Số lượng tam giác có thể tạo ra từ mảng là: ${ketQua}`);
