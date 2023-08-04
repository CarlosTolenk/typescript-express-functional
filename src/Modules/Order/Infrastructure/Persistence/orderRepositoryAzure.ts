import {getRepository} from "typeorm";
// Domain
import {OrderRepository} from "../../Domain/orderRepository";
import {Order} from "../../Domain/order";

// Infrastructure
import {OrdersEntity} from "./order.entity";

export const OrderRepositoryAzure = (): OrderRepository => {

    const save = (order: Order): Promise<void> => {
        return Promise.resolve();
    }

    const findAll = async (): Promise<Order[]> => {
        const ordersRepository = getRepository(OrdersEntity)
        const orders = await ordersRepository.find();
        return orders.map((entity) => mapperEntityToDomain(entity))
    }


    const mapperEntityToDomain = (entity: OrdersEntity): Order => {
        return {
            id: entity.id, amount: entity.amount, description: entity.description,
        }
    }

    return {
        save, findAll
    }
}
