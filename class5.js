// multiple condition logical operators
const salary = 25000;
const isBcs = false;
const height = 63;
// if(salary > 20000 && height > 66){
//     console.log('done')
// }
// else{
//     console.log('not yet')
// }
// if(salary > 25000 || height > 60){
//     console.log('yes')
// }
// else{
//     console.log('no')
// }
// if((salary > 25000 || height > 62) && isBcs === true){
//     console.log('yes')
// }
// else{
//     console.log('no')
// }
const hasCar = false;
//-------------------------------------
if((salary > 25000 && hasCar == true) || isBcs == true){
    console.log('ok')
}
else{
    console.log('nope')
}