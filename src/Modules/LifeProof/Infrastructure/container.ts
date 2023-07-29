// Infrastructure Controllers
import {HealthController} from "./Http/Controllers/healthController";
import {LivenessController} from "./Http/Controllers/livenessController";

// Infrastructure Persistence
import {HealthRepositoryInMemory} from "./Persistence/healthRepositoryInMemory";

// UseCase
import {HealthUseCase} from "../Application/health.useCase";
import {LivenessUseCase} from "../Application/liveness.useCase";

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
