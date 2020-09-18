// mySandwich
// slice the sandswich;
// put cheese on the sandwich;
// close the sandwich;

// function mySandwich() {
//     console.log('slice the sandwich');
//     console.log('put cheese on the sandwich');
//     console.log('close the sandwich');
// };

// mySandwich();

// function makeSandwich(topping) {
//     console.log('slice the sandwich');
//     console.log('put ' + topping + ' on the sandwich');
//     console.log('close the sandwich');
//     console.log('now you have a delicious sandwich with ' + topping);
//     // function declaration
// };

// makeSandwich('nutella');
// // function call

// function makeSandwich(topping) {
//     console.log('slice the sandwich');
//     console.log('put ' + topping + ' on the sandwich');
//     console.log('close the sandwich');
//     console.log('now you have a delicious sandwich with ' + topping);

// };

// makeSandwich('ham');

// function calculateDiscountedPrice(totalAmount, discount) {
//     return Math.round(totalAmount - discount);


// }
// console.log(calculateDiscountedPrice(51, 11.5));


function calculateDiscountedPrice(totalAmount, discount) {

    if (totalAmount < 25) {
        console.log(totalAmount);
    } else {
        return Math.round(totalAmount - discount);
    }

}
console.log(calculateDiscountedPrice(51, 11.5));
console.log(calculateDiscountedPrice(24.5, 11.5));