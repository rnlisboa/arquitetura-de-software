import Item from "./srp/refactor/Entity/Item";
import Order from "./srp/refactor/Entity/Order";
import CalcularTotalUseCase from "./srp/refactor/useCases/calcularTotalUseCase";
import SaveOrderUseCase from "./srp/refactor/useCases/saveOrderUseCase";

// SRP
const item1: Item = new Item("Café Macchiatto", 14.50);
const item2: Item = new Item("Croissant", 27.50);


const item3: Item = new Item("Bolo D'leite", 27.50);

const order: Order = new Order(1, [item1, item2, item3]);

const save: SaveOrderUseCase = new SaveOrderUseCase();

const newOrder: Order = save.execute(order);

const calcularTotal: CalcularTotalUseCase = new CalcularTotalUseCase();

console.log(`Novo pedido: ${newOrder.getOrderId()}`)

console.log(newOrder.getItems())

console.log(calcularTotal.calcularTotal(newOrder))


// OCP

