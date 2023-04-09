const addToDb = (id) =>{
    let shoppingCart = {}
    // ge previous data from local storage 
    const storedCart = localStorage.getItem("shopping-cart")
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    // add quantity 
    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity + 1
        shoppingCart[id] = newQuantity
    }
    else{
        shoppingCart[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

// get data in local storage 
const getStoredCart = () => {
    let shoppingCart = {}
    const storedCart = localStorage.getItem("shopping-cart")
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart
}


export {
    addToDb,
    getStoredCart,
}