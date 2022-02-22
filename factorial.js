//Factorial using loop
// 1! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5


// var fact = 1;
// for(var i=1; i<=6; i++){
//     fact = fact*i;
//      //1 ,1*1 = 1
//      //2, 1*2 = 2
//      //3, 2*3 = 6
//      //4, 6*4 = 24
//      //5, 24*5 = 120
// }
// console.log(fact);

// function factorial(n){
//     var fact = 1;
//     for(var i=1; i<=n; i++){
//         fact = fact*i;
//     }
//     return fact;
// }
// var result = factorial(5);
// console.log(result);
// var result = factorial(10);
// console.log(result);


//Factorial using While loop
// var fact = 1;
// var i = 1;
// while (i <= 5) {
//     fact = fact * i;
//     i++;
// }
// console.log(fact);


// function factorial(n) {
//     var fact = 1;
//     var i = 1;
//     while (i <= n) {
//         fact = fact * i;
//         i++;
//     }
//     return fact;
// }
// var result = factorial(4);
// console.log(result);

//Calaulate factorial in a Recursive function

function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
var result = factorial(5);
console.log(result);
