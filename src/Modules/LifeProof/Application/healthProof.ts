import {Health} from "../Domain/health";
import {HealthRepository} from "../Domain/healthRepository";

import {UseCase} from "../../Shared/Domain/useCases";
import {ILogger} from "../../Shared/Domain/logger";

interface IHealthUseCase {
    repository: HealthRepository,
    logger: ILogger
}

export interface HealthUseCase extends UseCase<Health> {
}

export const HealthProof = ({repository, logger}: IHealthUseCase): HealthUseCase => {
    const run = async (): Promise<Health> => {
        try {
            logger.info('Try HealthProof');
            return await repository.find()
        } catch (error) {
            logger.error('Error when try HealthProof');
            throw error
        }

    }


    return {
        run
    }
}
