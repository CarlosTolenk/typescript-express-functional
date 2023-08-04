// Domain
import {HealthRepository} from "../Domain/healthRepository";

// Application UseCase
import {HealthProof} from "../Application/healthProof";
import {LivenessProof} from "../Application/livenessProof";

// Infrastructure Controllers
import {HealthController} from "./Http/Controllers/healthController";
import {LivenessController} from "./Http/Controllers/livenessController";

// Infrastructure Persistence
import {HealthRepositoryInMemory} from "./Persistence/healthRepositoryInMemory";

// Infrastructure Logger
import Logger from "../../Shared/Infrastructure/Logger";

// Instance Repository
const repositoryInMemory: HealthRepository = HealthRepositoryInMemory();
const logger = Logger()

// Instances useCases
const healthUseCase = HealthProof({repository: repositoryInMemory, logger: logger})
const useCaseLiveness = LivenessProof()

const ContainerHealthController = HealthController({
    useCase: healthUseCase
})

const ContainerLivenessController = LivenessController({
    useCase: useCaseLiveness
})

export {ContainerHealthController, ContainerLivenessController}
