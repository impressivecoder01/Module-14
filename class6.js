//Multi level if-else if-else condition
const price = 4000;
if(price >= 5000){
    const discount = price * 10/100
    const payAmount = price - discount;
    console.log(payAmount)
}
else if(price >= 4000){
    const discount = price * 5/100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else{
    console.log(price)
}
//--------------------------------------------
const age = 20;
const cost = 700;
if(age < 8){
    console.log('free')
}

else if (age >= 60){
    const pay = cost - age;
    console.log('you have to pay', pay)
}
else(
    console.log('full payment')
)