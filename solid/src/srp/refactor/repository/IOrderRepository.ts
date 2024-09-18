import Order from "../Entity/Order";

export interface IOrderRepository {
    save(order: Order): Order;
}