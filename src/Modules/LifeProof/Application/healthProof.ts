import {Health} from "../Domain/health";
import {HealthRepository} from "../Domain/healthRepository";
import {UseCase} from "../../Shared/Domain/useCases";

interface IHealthUseCase {
    repository: HealthRepository
}

export interface HealthUseCase extends UseCase<Health> {
}

export const HealthProof = ({repository}: IHealthUseCase): HealthUseCase => {

    const run = async (): Promise<Health> => {
        return await repository.find()
    }


    return {
        run
    }
}
