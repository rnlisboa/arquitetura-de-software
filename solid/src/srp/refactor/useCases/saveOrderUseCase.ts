class SaveOrderUseCase {
    private orderRepository: OrderRepository;
    constructor(){
        this.orderRepository = new OrderRepository();
    }
    public execute(order: Order): Order {
        const newOrder = this.orderRepository.save(order);
        return newOrder;
    }
}