import Order from "../Entity/Order";
import { IOrderRepository } from "./IOrderRepository";

export default class OrderRepository implements IOrderRepository {
    save(order: Order): Order {
        return order;
    }
    
}