// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.



//This prototype can handle single criterion filter only, but multiple filters can be implememted with some tweaks.However this present codes serves the purpose of the question and fulfills the demands in the problem statement.


let phones =[
    {storage:"64", ram:6 ,brand:"Nothing", price:23999},
    {storage:"128", ram:6 ,brand:"Nothing", price:26999},
    {storage:"256", ram:12, brand:"Nothing", price:42999},
    {storage:"128", ram:8 ,brand:"Nothing", price:29999},
    {storage:"256", ram:12 ,brand:"Apple", price:156499},
    {storage:"128", ram:8, brand:"Apple", price:89499},
    {storage:"64", ram:8, brand:"Apple", price:63499},
    {storage:"64", ram:4 ,brand:"Oppo", price:11499},
    {storage:"128", ram:6 ,brand:"Oppo", price:15999},
    {storage:"128", ram:8 ,brand:"Oppo", price:19499},
    {storage:"128", ram:4 ,brand:"Vivo", price:12499},
    {storage:"128", ram:8 ,brand:"Vivo", price:17499},
    {storage:"128", ram:6 ,brand:"Vivo", price:16499},
    {storage:"128", ram:6 ,brand:"Motorola", price:19499},
    {storage:"128", ram:8 ,brand:"Motorola", price:18499},
    {storage:"256", ram:8, brand:"Motorola", price:24999},
    {storage:"64", ram:4 ,brand:"RealMe", price:11499},
    {storage:"128", ram:6 ,brand:"RealMe", price:15999},
    {storage:"256", ram:8 ,brand:"RealMe", price:19499},
    {storage:"128", ram:6 ,brand:"RealMe", price:12499},
    {storage:"256", ram:8 ,brand:"RealMe", price:17499},
    {storage:"128", ram:8 ,brand:"RealMe", price:16499},
]
let criteria = parseInt(prompt("Chose a Filter:\n0 - Max Price\n1 - Brand\n2 - RAM\n3 - Storage\n"))

function filterProducts(criteria,arr=phones){
    filteredPhones = []
    switch (criteria) {
        case 0:
            let max_price = parseInt(prompt("Enter the max price."))
            arr.forEach((phone) =>{
                if (phone.price<= max_price) {
                    filteredPhones.push(phone)
                }
            })
            break;

        case 1:
            let brand = prompt("Enter a brand to filter.\nNothing\nApple\nOppo\nVivo\nMotorola\nRealMe")
            arr.forEach((phone) =>{
                if (phone.brand == brand) {
                    filteredPhones.push(phone)
                }
            })
            break;

        case 2:
            let ram = prompt("Enter desired RAM (in GB)\n 4GB | 6GB | 8GB | 12GB")
            arr.forEach((phone) =>{
                if (phone.ram == ram) {
                    filteredPhones.push(phone)
                }
            })
            break;

        case 3:
            let storage = prompt("Enter desired Storage Capacit(in GB)y\n 64GB | 128GB | 256GB")
            arr.forEach((phone) =>{
                if (phone.storage == storage ) {
                    filteredPhones.push(phone)
                }
            })
            break;

    }
    
    console.log(filteredPhones)
    
    
}
filterProducts(criteria)