import {UseCase} from "../../Shared/Domain/useCases";
import {Order} from "../Domain/order";
import {OrderRepository} from "../Domain/orderRepository";

interface IGetAllOrderUseCase  {
    repository: OrderRepository
}
export interface GetAllOrder extends UseCase<Order[]> {
}

export const GetAllOrderUseCase = ({repository}: IGetAllOrderUseCase): GetAllOrder => {
    const run = (): Promise<Order[]> => {
        return repository.findAll();
    }

    return {
        run
    }

}
