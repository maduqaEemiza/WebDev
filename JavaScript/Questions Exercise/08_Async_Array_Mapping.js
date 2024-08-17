// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

arr = [11,24,37,45,50,69]

delayDoubler(arr)

async function delayDoubler(arr) {
    let doubled_arr =[]
    return new Promise((res)=>{
        for (let i = 0; i < arr.length; i++) {
            setTimeout(() => {
                res(doubled_arr.push(arr[i]*=2))
                
                console.log(doubled_arr)
            }, 500*(i+1));
            
        }
    })
}