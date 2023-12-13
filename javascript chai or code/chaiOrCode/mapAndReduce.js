const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumbers.map(  (num)  => num + 10 )

const newNums = myNumbers
                        .map(  (num) => num * 10 )
                        .map(  (num) => num +1 )         //num me vo value aayegi jo last num se nikli ho
                        .filter( (num ) => num >= 40 )

console.log(newNums);


// ****************************reduce****************************

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc , currVal ) {
//     console.log(`accumulator: ${acc} and current value: ${currVal}`);
//     return acc + currVal
// } , 0 )

const myTotal = myNums.reduce( (acc , currVal ) => acc+currVal,0)
console.log(myTotal);

// ******************************************************************************************
 
const shoppingCart = [
    {
        itemName : "Shirt",
        price: 2999
    },
    {
        itemName : "jeans",
        price: 5999
    },
    {
        itemName : "sunglasses",
        price: 999
    },
    {
        itemName : "wallet",
        price: 1999
    },
]

const bill = shoppingCart.reduce( (acc , item) => acc + item.price , 0 )

console.log(bill);

// *****congratulations apna javascript ka basics khatam ho chuka hai 