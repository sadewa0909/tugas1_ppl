const incrementQty = (qty) => qty + 1;
const decrementQty = (qty) => qty - 1;

function recalculateSubTotal(price, qty){
    return price * qty;
}
function hitungDiskon(price, qty, kode){
    const subTotal = recalculateSubTotal(price, qty);
    switch(kode){
        case "Kode1":
        hasilDiskon = subTotal * 0.10;
        break;
        case "kode2":
        hasilDiskon = subTotal * 0.20;
        break;
        case "kode3":
        hasilDiskon = subTotal * 0.30;
        break;
    }
}
function absoluteQty(qty){
    return (parseInt(qty) < 1) ? 1: qty;
}
function total(price, qty, kode){
    return recalculateSubTotal(qty, price) - hitungDiskon(price, qty, kode);
}


module.exports = { 
    incrementQty, 
    decrementQty,
    recalculateSubTotal,
    hitungDiskon,
    absoluteQty,
    total
};
