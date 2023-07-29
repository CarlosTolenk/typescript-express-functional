import {HealthRepository} from "../../Domain/healthRepository";

export const healthRepositoryInMemory = (): HealthRepository => {
    const find = async () => {
        return {status: 'OK'}
    }

    return {
        find
    }

}
