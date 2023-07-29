import {HealthRepository} from "../../Domain/healthRepository";

export const HealthRepositoryInMemory = (): HealthRepository => {
    const find = async () => {
        return {status: 'OK'}
    }

    return {
        find
    }

}
