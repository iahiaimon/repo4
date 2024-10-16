function arr(number) {
    let sum = 0; 
    for (let i = 0; i < number.length; i++) {
        sum = sum + number[i];
    }
    return sum;
}


const num = [10 , 12 , 15 , 17 , 20];
console.log(arr(num));
