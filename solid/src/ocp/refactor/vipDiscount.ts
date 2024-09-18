import Order from "../../srp/refactor/Entity/Order";
import CalcularTotalUseCase from "../../srp/refactor/useCases/calcularTotalUseCase";
import { ICalculator } from "./ICalculator";

export default class VipDiscount implements ICalculator {
    calculate(order: Order): number {
        const calcularTotalUseCase: CalcularTotalUseCase = new CalcularTotalUseCase();
        return calcularTotalUseCase.calcularTotal(order) * 0.1
    }
    
}