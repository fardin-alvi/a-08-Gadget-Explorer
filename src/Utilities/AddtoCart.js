const getStoreCart = () => {
    const storeCart = localStorage.getItem('cart-list');
    if (storeCart) {
        const storeCarts = JSON.parse(storeCart);
        return storeCarts;
    }
    else {
        return [];
    }
}
const addTocartList = (id) => {
    const storeCartIteam = getStoreCart()
    if (storeCartIteam.includes(id)) {
        alert('Alrerady Exist')
    }
    else {
        storeCartIteam.push(id)
        const storeCartset = JSON.stringify(storeCartIteam);
        localStorage.setItem('cart-list', storeCartset)
    }
}

const getstorewishlist = () =>{
    const Storewish = localStorage.getItem('wish-list');
    if (Storewish) {
        const storewish = JSON.parse(Storewish);
        return storewish;
    }
    else {
        return [];
    }
}
const addStoreWishlist = (id) => {
    const storewish = getstorewishlist()
    if (storewish.includes(id)) {
        
    }
    else {
        storewish.push(id)
        const storeWishiteam = JSON.stringify(storewish);
        localStorage.setItem('wish-list', storeWishiteam)
    }
}

export { addStoreWishlist, addTocartList, getStoreCart, getstorewishlist }