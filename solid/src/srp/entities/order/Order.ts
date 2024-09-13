import Item from "../item/Item"
class Order{
    private order_id: number;
    private items: Item[];

    constructor(order_id: number, items: Item[]){
        this.items = items;
        this.order_id = order_id;
    }

    public getOrderId(){
        return this.order_id;
    }
}