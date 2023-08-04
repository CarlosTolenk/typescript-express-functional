import {UseCaseWithParams} from "../../Shared/Domain/useCases";

export interface GetAllOrder extends UseCaseWithParams<any, void> {
}

export const GetAllOrderUseCase = (): GetAllOrder => {
    const run = (): Promise<void> => {
        return Promise.resolve();
    }

    return {
        run
    }

}
