import Item from "./Item";

export default class Order {
    private orderId: number;
    private items: Item[];

    constructor(orderId: number, items: Item[]) {
        this.orderId = orderId;
        this.items = items;
    }

    public getOrderId(): number{
        return this.orderId;
    }

    public getItems(): Array<Item>{
        return this.items;
    }

    printOrder(): void {
        console.log(`Order ID: ${this.orderId}`);
        for (const item of this.items) {
            console.log(`Item: ${item.name}, Price: ${item.price}`);
        }
    }
}