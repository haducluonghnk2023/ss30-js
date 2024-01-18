function inSoNguyenLeMax(n) {
    if (n % 2 === 0) {
        n--;
    }
    let tong = 0;
    for (let i = 1; i <= n; i += 2) {
        console.log(i);
        tong += i;
    }
    return tong;
}
let n = parseInt(prompt("Nhập vào một số nguyên dương:"));
console.log(`Các số nguyên dương lẻ từ 0 đến ${n} :`);
const result = inSoNguyenLeMax(n);
console.log(`Tổng của các số nguyên dương lẻ: ${result}`);

