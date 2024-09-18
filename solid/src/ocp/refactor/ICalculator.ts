import Order from "../../srp/refactor/Entity/Order";

export interface ICalculator {
    calculate(order: Order): number;
}