import {Order} from "./order";

export interface OrderRepository {
    findAll(): Promise<Order[]>
    save(order: Order): Promise<void>
}
