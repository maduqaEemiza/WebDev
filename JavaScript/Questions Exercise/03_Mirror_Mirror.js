// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let str = prompt("Enter a word!")
console.log(mirror(str))


function mirror(str){

    let revstr = [...str].reverse().join('')
    return str.concat(revstr)
}


