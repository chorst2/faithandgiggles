
function StoreCollection(){
    let arr = [];

    arr.addItem = function(item){
        this.push(item);

        //allows for chaining
        //this is referring to the array
        return this;
    }
    //TODO: create filters given the tags on the objects
    //check recording to see how to filter by tags array

    // arr.under25FemaleFun = function(){
    //     return this.filter(function(item){
    //         return !item.purchased && item.category === 'want';
    //     });
    // },



    return arr;
}

export default StoreCollection;