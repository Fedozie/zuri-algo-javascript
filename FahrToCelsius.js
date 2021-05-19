const convertFahrToCelsius = (parameter) => {
    //Variable Declarations
    let result = ((parameter - 32) * (5/9));
    let parameterType = typeof parameter;

    if(Array.isArray(parameter) === true){
        //Condition to check for arrays
        return console.log(`[${parameter}] is not a valid number but a/an array.`);
    }else if(parameterType === 'object'){
        //Condition to check for objects
        let objectParameter = JSON.stringify(parameter)
        return console.log(`${objectParameter} is not a valid number but a/an object.`);
    }else if(parameter === true || parameter === false){
        //Condition to check for booleans
        return console.log(`${parameter} is not a valid number but a/an boolean.`);
    }else if(parameterType !== 'number' && isNaN(parameter)){
        //Condition to check for datatypes that are not numbers
        return console.log(`${parameter} is not a valid number but a/an ${parameterType}.`);
    }else{
        return result.toFixed(4);
    }
}

//Test Cases
console.log(convertFahrToCelsius(0))
console.log(convertFahrToCelsius('0'))
console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius({temp: 0}))
console.log(convertFahrToCelsius(true))