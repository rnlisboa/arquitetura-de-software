class CalcularTotalUseCase {
    private order: Order;
    constructor(order: Order){
        this.order = order;
    }

    public calcularTotal(): number{
        let total = 0;
        for (const item of this.order.getItems()) {
            total += item.price;
        }
        return total;
    }
}