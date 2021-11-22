function StoreItem(id, image, name, price, tags){

    this.id = id;
    this.image = image;
    this.name = name;
    this.price = price;
    this.tags = tags | [];

}


export default StoreItem;