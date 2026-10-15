// calculate the subtotal using ticket price * quantity
// if the quantity is 5 or more, apply a 15% discount
// otherwise, if the quantity is 3 or more apply a 10% discount
// if the coupons code is valid, apply an additional 5% discount to the amount remaining after the quantity discount 
// round the final amount using Math.round()
//print the subtotal, discount , and final payable amount 

const ticketPrice =300;
const quantity =10;
const cc="bajscbs";

let subtotal =ticketPrice * quantity;
let discount= 0;
if (quantity >= 5) {
    discount = subtotal * 0.15;
} 
else if (quantity >= 3) {
    discount = subtotal * 0.10;
}
let amount = subtotal - discount;
if (cc === "bajscbs") {
    amount = amount-(amount * 0.05);
}
let finalpaise = Math.round(amount);

console.log("subtotal:", subtotal);
console.log("discount:", discount);
console.log("final payable amount:",finalpaise );