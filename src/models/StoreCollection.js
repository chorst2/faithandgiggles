function StoreCollection(){
    //array stores all the products in the store
    let arr = [];

    //add product to store collection
    arr.addItem = function(item){
        this.push(item);

        return this;
    }


    //filter to display products recommended for user based on quiz results
    arr.quizFilter = function(selectedTags){
        //stores the results from the quiz
        let tagsArray = Object.values(selectedTags);
        //array that stores the items that will be displayed in quiz results
        let filteredItems = [];
        //stores the products that have the same age tag as the age selected in the quiz
        let ageAppropriate = arr.filter(item => {
            return item.tags.includes(selectedTags.first);
        });
        //loops through the items in the filter
        ageAppropriate.forEach(item => {
            //for each individual items tags checks to see if they include any of the tags as the ones in the tagsArray
            item.tags.forEach(tag => {
            if(tagsArray.includes(tag)){
                    //checks items location in the filteredItems array
                    let itemLocation = filteredItems.indexOf(item);
                    //if product is not already in filteredItems array then push it
                    if(itemLocation === -1) filteredItems.push(item);
                }
            })
        })
        //return the array with the filtered items to be displayed as quiz results
        return filteredItems;
    }



    return arr;
}

export default StoreCollection;