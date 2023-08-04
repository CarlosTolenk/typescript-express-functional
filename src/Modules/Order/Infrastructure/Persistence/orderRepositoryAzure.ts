import {OrderRepository} from "../../Domain/orderRepository";
import {Order} from "../../Domain/order";
import {getRepository} from "typeorm";
import {Orders} from "./order.entity";

export const OrderRepositoryAzure = (): OrderRepository => {

    const save = (order: Order): Promise<void> => {
        return Promise.resolve();
    }

    const findAll = async (): Promise<Order[]> => {
        const order = getRepository(Orders)
        const orderBD = await order.find()
        return Promise.resolve(orderBD);
    }

    return {
        save, findAll
    }
}
