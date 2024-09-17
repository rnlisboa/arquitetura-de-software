class LegacyOrder {
    private orderId: number;
    private items: LegacyItem[];

    constructor(orderId: number, items: LegacyItem[]) {
        this.orderId = orderId;
        this.items = items;
    }

    calculateTotal(): number {
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }
        return total;
    }

    printOrder(): void {
        console.log(`Order ID: ${this.orderId}`);
        for (const item of this.items) {
            console.log(`Item: ${item.name}, Price: ${item.price}`);
        }
    }

    saveToDatabase(): void {
        // Simulando a gravação no banco de dados
        console.log(`Order ${this.orderId} saved to database`);
    }
}