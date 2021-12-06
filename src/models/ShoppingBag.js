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

    cartArray.suggestedItems = function(products){
        let cartTags = [];
        let productTags = '';
        for(var i = 0; i < cartArray.length; i++){
            productTags = cartArray[i].tags
            console.log('these are the tags being put in cartTags array: '+ productTags);
            //const array1 = ['a', 'b', 'c'];
            //const array2 = ['d', 'e', 'f'];
            //const array3 = array1.concat(array2);
            //console.log(array3);
            cartTags = cartTags.concat(productTags);
        }
        let suggestedItemArray = [];
        products.forEach(item => {
            let matched = true;
            item.tags.forEach(tag => {
                if(!cartTags.includes(tag)){
                    matched = false;
                }
            })
            let itemLocation = suggestedItemArray.indexOf(item);
            let itemLocationCart = cartArray.indexOf(item);
            if(itemLocation === -1 && itemLocationCart === -1 && matched) suggestedItemArray.push(item);
        })
        console.log(suggestedItemArray);
        return suggestedItemArray.slice(0,3);
    }


    return cartArray;

}

export default ShoppingBag;