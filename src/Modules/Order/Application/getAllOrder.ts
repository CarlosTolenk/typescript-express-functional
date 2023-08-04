import {UseCase} from "../../Shared/Domain/useCases";
import {Order} from "../Domain/order";
import {OrderRepository} from "../Domain/orderRepository";
import {ILogger} from "../../Shared/Domain/logger";

interface IGetAllOrderUseCase {
    repository: OrderRepository,
    logger: ILogger
}

export interface GetAllOrder extends UseCase<Order[]> {
}

export const GetAllOrderUseCase = ({repository, logger}: IGetAllOrderUseCase): GetAllOrder => {
    const run = (): Promise<Order[]> => {
        try {
            logger.info('Try GetAllOrderUseCase')
            return repository.findAll();
        } catch (error) {
            logger.error('Error when GetAllOrderUseCase')
            throw error;
        }

    }

    return {
        run
    }

}
