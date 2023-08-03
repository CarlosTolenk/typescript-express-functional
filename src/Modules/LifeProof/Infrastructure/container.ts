// Domain
import {HealthRepository} from "../Domain/healthRepository";

// Application UseCase
import {HealthUseCase} from "../Application/healthUseCase";
import {LivenessUseCase} from "../Application/livenessUseCase";

// Infrastructure Controllers
import {HealthController} from "./Http/Controllers/healthController";
import {LivenessController} from "./Http/Controllers/livenessController";

// Infrastructure Persistence
import {HealthRepositoryInMemory} from "./Persistence/healthRepositoryInMemory";

// Instance Repository
const repositoryInMemory: HealthRepository = HealthRepositoryInMemory()

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
