const checkYuGiOh = (n) => {
    //Declaring the array variable
    let myArray = [];

    for(let i = 1; i <= n; i++){
        if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
            //Condition to check for array items that are multiples of 2, 3 and 5
            myArray.push('yu-gi-oh')
        }else if(i % 3 === 0 && i % 5 === 0){
            //Condition to check for array items that are multiples of 3 and 5
            myArray.push('gi-oh')
        }else if(i % 2 === 0 && i % 5 === 0){
            //Condition to check for array items that are multiples of 2 and 5
            myArray.push('yu-oh')
        }else if(i % 2 === 0 && i % 3 === 0){
            //Condition to check for array items that are multiples of 2 and 3
            myArray.push('yu-gi')
        }else if(i % 5 === 0){
            //Condition to check for array items that are multiples of 5 only
            myArray.push('oh')
        }else if(i % 3 === 0){
            //Condition to check for array items that are multiples of 3 only
            myArray.push('gi')
        }else if(i % 2 === 0){
            //Condition to check for array items that are multiples of 2 only
            myArray.push('yu')
        }else{
            myArray.push(i)
        }
    }

    //Conditional statement to check if the argument is of data type number
    if(typeof n === 'number'){
        return myArray;
    }else{
        console.log(`Invalid parameter: ${n}.`)
    }
}

//Test Cases
console.log(checkYuGiOh(5))
console.log(checkYuGiOh(10))
console.log(checkYuGiOh(30));
console.log(checkYuGiOh("'fizzbuzz is meh'"))