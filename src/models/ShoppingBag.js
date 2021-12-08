function ShoppingBag() {
    //stores the items in the shopping bag
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
        //empty array/cart
        cartArray.splice(0);

    }

    cartArray.removeFromCart = function(item){
        //removes specific item from cart
        this.splice(this.indexOf(item), 1);

        return this;
    }

    cartArray.suggestedItems = function(products){
        //array that stores all the tags for the items in the cart
        let cartTags = [];
        // variable that holds the tags for each product in cart - this variable gets merged to cartTags array
        let productTags = '';
        //loops through items in the cart
        for(var i = 0; i < cartArray.length; i++){
            //assigns the variable the tags from the product in cart
            productTags = cartArray[i].tags
            //merges the individual products tags to the array of cart tags
            cartTags = cartTags.concat(productTags);
        }
        //array that stores the products that will be displayed as suggestions in the shopping bag
        let suggestedItemArray = [];
        //loops through all the products in the store
        products.forEach(item => {
            //variable that checks if the product has the tags that match the tags in cartTags array
            let matched = true;
            //for each individual product in the store it checks if it has all of the tags that match the ones in the cart
            item.tags.forEach(tag => {
                if(!cartTags.includes(tag)){
                    matched = false;
                }
            })
            //checks for location for the product in the suggested items array
            let itemLocation = suggestedItemArray.indexOf(item);
            //checks for location for the product in the cart
            let itemLocationCart = cartArray.indexOf(item);
            //if product is not already in the cart or already in suggested items array and its tags
            //match the tags in the cart then add it to the suggested item array
            if(itemLocation === -1 && itemLocationCart === -1 && matched) suggestedItemArray.push(item);
        })
        //returns the first three products from the suggested item array
        return suggestedItemArray.slice(0,3);
    }


    return cartArray;

}

export default ShoppingBag;