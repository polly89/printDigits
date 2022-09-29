function printDigits(num){
    let reversed = 0;
    
     while (num != 0){
        reversed *= 10;
        reversed += num % 10;
        num -= num %10;
        num /=10
     }
     return reversed
}

console.log(printDigits(12345))

// Explantion:
// This method finds the remainder of a given number by using the modulo(%) operator. 
// You multiply the variabe reverse by 10 and add the remainder into it. Then, divide it by 10.

// Ex:
// number = 12345
// remainder = 12345 % 10 = 5
// reverse = 0 * 10 + 5 = 0 + 5 = 5
// number = 12345 / 10 = 1234

// Repeat for all integers. 