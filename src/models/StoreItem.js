function StoreItem(id, image, name, price, tags, quantity){

    this.id = id;
    this.image = image;
    this.name = name;
    this.price = price;
    this.tags = tags || [];
    this.quantity = quantity || 1;

}


export default StoreItem;