
function StoreCollection(){
    let arr = [];

    //add product to store collection
    arr.addItem = function(item){
        this.push(item);

        return this;
    }


    //filter to display products recommended for user based on quiz results

    //arr is the array carrying all of the store items
    //selected tags are the tags that were chosen from the quiz results
    //item is referring to each product in the store collection


    //original
    // arr.quizFilter = function(selectedTags){
    //            return arr.filter(item => selectedTags.includes(item.tags));
    // }

    //TODO: still doesnt work
    arr.quizFilter = function(selectedTags){
        let tagsArray = Object.values(selectedTags);
        let filteredItems = [];
        let ageAppropriate = arr.filter(item => {
            return item.tags.includes(selectedTags.first);
        });
        ageAppropriate.forEach(item => {
            item.tags.forEach(tag => {
            if(tagsArray.includes(tag)){
                    let itemLocation = filteredItems.indexOf(item);
                    if(itemLocation === -1) filteredItems.push(item);
                }
            })
        })
        console.log(filteredItems);
        return filteredItems;
    }




    return arr;
}

export default StoreCollection;