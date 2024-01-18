function kiemTraMangDoiXung(mang) {
    const doDai = mang.length;
    for (let i = 0; i < doDai / 2; i++) {
        if (mang[i] !== mang[doDai - 1 - i]) {
            return false; 
        }
    }
    return true;
}
const mangKhaiBao = [1, 2, 3, 5, 3, 2, 1];
console.log("Mảng đã khai báo:", mangKhaiBao);
console.log("Mảng có đối xứng:", kiemTraMangDoiXung(mangKhaiBao));
