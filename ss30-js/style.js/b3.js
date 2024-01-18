function sapXepChuoi(chuoi) {
    let chu = [];
    let so = [];
    let dacBiet = [];
    for (let i = 0; i < chuoi.length; i++) {
        if (isNaN(chuoi[i])) {
            if (chuoi[i].match(/[a-zA-Z]/)) {
                chu.push(chuoi[i]);
            } else {
                dacBiet.push(chuoi[i]);
            }
        } else {
            so.push(chuoi[i]);
        }
    }
    let ketQua = chu.concat(so, dacBiet);
    return ketQua;
}
let chuoiNhap = prompt("Nhập vào một chuỗi bất kỳ:");
let ketQua = sapXepChuoi(chuoiNhap);
console.log("Mảng kết quả:", ketQua);
