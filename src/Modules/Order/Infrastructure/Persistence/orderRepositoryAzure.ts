import {OrderRepository} from "../../Domain/orderRepository";
import {Order} from "../../Domain/order";

export const orderRepositoryAzure = (): OrderRepository => {

    const save = (order: Order): Promise<void> => {
        return Promise.resolve();
    }

    const findAll = (): Promise<Order[]> => {
        return Promise.resolve([]);
    }

    return {
        save, findAll
    }
}
