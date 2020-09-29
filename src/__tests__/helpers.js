/*
    Gunakan file ini untuk membuat test case dengan Jest
*/
const{
    incrementQty,
    decrementQty,
    recakculateSubtotal,
    abosilteQty,
    hitungDiskon,
    total
} = require('../helpers.js')

test('Qty 1 jika ditambahkan 1 hasilnya 2', () => {
    expect(incrementQty(1)).toBe(2);
});
test('Qty 1 jika ditambah "1" hasilnya 2', () => {
    excpect(incrementQty("1")).toBe(2);
});
test('Qty 2 jika dikurangi 1 hasilnya 1', () => {
    expect(decrementQty(2)).toBe(1);
});

test('Jika Qty -1, maka menjadi 1', () => {
    expect(absoluteQty(-1)).toBe(1);
});
test('jika harga 50000 dan Qty 1 hasilnya 50000', () => {
    expect(recalculateSubtotal(50000, 1)).toBe(50000);
});
test('jika harga 50000 dan Qty 1 dengan kode "Kode1" maka diskon nya 5000', () => {
    expect(hitungDiskon(50000, 1, 'Kode1')).toBe(5000);
});
test('jika harga 50000 dan Qty 1 dengan kode "Kode1" maka diskon nya 45000', () => {
    expect(total(50000, 1, 'Kode1')).toBe(45000);
});



