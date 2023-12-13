
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