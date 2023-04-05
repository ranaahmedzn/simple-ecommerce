import { getShoppingCart } from "../../utilities/fakedb"

const cartProductsLoader = async() => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json()

    const storedCart = getShoppingCart()
    const savedCart = []
    for(const id in storedCart){
        const selectedProduct = products.find(pd => pd.id === id);
        const quantity = storedCart[id]
        selectedProduct.quantity = quantity;
        savedCart.push(selectedProduct)
    }

    return savedCart;
}

export default cartProductsLoader;