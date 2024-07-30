//Using reduce()
let arr=[1,2,3,4,5,6,7,8]

const factorial = (a,b)=>{
    return a*b
}

console.log(arr.reduce(factorial))

//factorial using loops
let fact = 1;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    fact = fact*arr[i]

}

console.log(fact)