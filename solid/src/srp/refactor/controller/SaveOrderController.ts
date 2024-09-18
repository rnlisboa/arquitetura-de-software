import Order from "../Entity/Order";
import SaveOrderUseCase from "../useCases/saveOrderUseCase";

export default class SaveOrderController {
    public handle(order: Order){
        const useCase: SaveOrderUseCase = new SaveOrderUseCase();
        const newOrder = useCase.execute(order);
        return newOrder; 
    }
}