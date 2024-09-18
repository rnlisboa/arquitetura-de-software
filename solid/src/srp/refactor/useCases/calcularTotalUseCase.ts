import Order from "../Entity/Order";

export default class CalcularTotalUseCase {

    public calcularTotal(order: Order): number{
        let total = 0;
        for (const item of order.getItems()) {
            total += item.price;
        }
        return total;
    }
}