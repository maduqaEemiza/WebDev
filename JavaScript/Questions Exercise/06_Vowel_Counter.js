// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let str = "HellO, I aM a BOyiee U aRE nOOt oNe."

let VOWELS = 'AEIOU'
let vowels = 'aeiou'

const totalVowels = vowelCounter(str)

console.log(`${totalVowels}/${str.length} characters of the given string are Vowels.`)


function vowelCounter(str){

    let counter = 0
    for (const e of str) {
        if(VOWELS.includes(e)){
            counter++
        }
        else if(vowels.includes(e)){
            counter++
        }
    }
    return counter
}
