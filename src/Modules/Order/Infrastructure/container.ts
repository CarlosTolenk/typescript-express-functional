// Domain
import {OrderRepository} from "../Domain/orderRepository";

// Infrastructure Controllers
import {GetAllOrderController} from "./Http/Controllers/getAllOrderController";

// Infrastructure Persistence
import {OrderRepositoryAzure} from "./Persistence/orderRepositoryAzure";

// Application useCases
import {GetAllOrderUseCase} from "../Application/getAllOrder";


// Instance Persistence
const orderRepository: OrderRepository = OrderRepositoryAzure()

// Instance UseCases
const getAllOrderUseCase = GetAllOrderUseCase({repository: orderRepository})

const ContainerGetAllOrderController = GetAllOrderController({useCase: getAllOrderUseCase});

export {ContainerGetAllOrderController}
