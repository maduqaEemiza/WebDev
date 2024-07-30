//Business name generator
function randnum(){
a = Math.floor((Math.random()*10)/3)
if (a == 0)
    return randnum()

else
    return a
}

a= randnum()

switch (a) {
    case 1:
        first = 'Crazy'
        break;
    case 2:
        first = 'Amazing'
        break;
    case 3:
        first = 'Fire'
        break;

}

a= randnum()

switch (a) {
    case 1:
        mid = 'Engine'
        break;
    case 2:
        mid = 'Food'
        break;
    case 3:
        mid = 'Garments'
        break;

}

a= randnum()

switch (a) {
    case 1:
        last = 'Bros'
        break;
    case 2:
        last = 'Limited'
        break;
    case 3:
        last = 'Hub'
        break;

}

console.log(`Your business should be called \n "${first} ${mid} ${last}"`)