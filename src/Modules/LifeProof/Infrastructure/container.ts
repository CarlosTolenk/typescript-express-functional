// Infrastructure Controllers
import {HealthController} from "./Http/Controllers/healthController";
import {LivenessController} from "./Http/Controllers/livenessController";

// Infrastructure Persistence
import {HealthRepositoryInMemory} from "./Persistence/healthRepositoryInMemory";

// UseCase
import {HealthUseCase} from "../Application/healthUseCase";
import {LivenessUseCase} from "../Application/livenessUseCase";

// Instance Repository
const repositoryInMemory = HealthRepositoryInMemory()

// Instances useCases
const healthUseCase = HealthUseCase({repository: repositoryInMemory})
const useCaseLiveness = LivenessUseCase()

const ContainerHealthController = HealthController({
    useCase: healthUseCase
})

const ContainerLivenessController = LivenessController({
    useCase: useCaseLiveness
})

export {ContainerHealthController, ContainerLivenessController}
