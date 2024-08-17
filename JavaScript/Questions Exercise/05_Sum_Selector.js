// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let arr= [1,29,3,43,5,61,4,-18,95,69]

let arr_sum = sumSelector(arr)
console.log(arr_sum)

function sumSelector(arr){
    let sum = 0;
    for (const e of arr) {
        if (e>=0) {
            sum+=e
        }
        else{

            return sum
        }
    }
}

