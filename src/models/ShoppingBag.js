
function ShoppingBag() {
    let cartArray = [];

    cartArray.addToCart = function(item){
        //add item to cart array
        this.push(item);
    }

    cartArray.checkOutBag = function(){
        //put details into firebase
        //name and phone number and items ordered (id and name and quantity and price)


        //empty array
        cartArray.splice(0);

    }

    // cartArray.changeQuantity = function(item){
    //
    // }


    cartArray.removeFromCart = function(item){
        this.splice(this.indexOf(item), 1);

        return this;
    }


    return cartArray;

}

export default ShoppingBag;