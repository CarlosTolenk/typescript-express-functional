// Domain
import {OrderRepository} from "../Domain/orderRepository";

// Infrastructure Controllers
import {GetAllOrderController} from "./Http/Controllers/getAllOrderController";

// Infrastructure Persistence
import {OrderRepositoryAzure} from "./Persistence/orderRepositoryAzure";

// Infrastructure Logger
import Logger from "../../Shared/Infrastructure/Logger";

// Application useCases
import {GetAllOrderUseCase} from "../Application/getAllOrder";


// Instance Infrastructure
const orderRepository: OrderRepository = OrderRepositoryAzure()

// Instance UseCases
const getAllOrderUseCase = GetAllOrderUseCase({repository: orderRepository, logger: Logger()})

const ContainerGetAllOrderController = GetAllOrderController({useCase: getAllOrderUseCase});

export {ContainerGetAllOrderController}
