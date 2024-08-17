// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them

arr=[1,21,39,455,455,0,71,71,100]


function DoubleTrouble(arr){
    for (let i = 0; i < arr.length; i++) {

      if (arr[i] == arr[i+1]) {
        //selecting one of the two 
        let rand = Math.round(Math.random())
        switch (rand) {
            case 0:
                arr[i]*=2
                i++;
                break;
            case 1:
                arr[i+1]*=2
                i++;
                break;

        }
        }
        else{
            arr[i] *=2
        }
    }
    console.log(arr)
}

DoubleTrouble(arr)

