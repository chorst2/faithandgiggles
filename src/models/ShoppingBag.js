function ShoppingBag() {
    let cartArray = [];

    cartArray.addToCart = function(item){
        //find index of item in the cart
        let itemsLocation = this.indexOf(item);
        //if item is in the cart then increase its quantity in the cart
        if(itemsLocation > -1){
            cartArray[itemsLocation].quantity++;
        }
        //otherwise if it is not in the cart then add it to the cart
        else{
            //add item to cart array
            this.push(item);
        }

    }

    cartArray.clearBag = function(){
        //empty array
        cartArray.splice(0);

    }

    cartArray.removeFromCart = function(item){
        //removes specific item from cart
        this.splice(this.indexOf(item), 1);

        return this;
    }


    return cartArray;

}

export default ShoppingBag;