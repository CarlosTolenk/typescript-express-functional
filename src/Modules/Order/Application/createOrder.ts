import {UseCaseWithParams} from "../../Shared/Domain/useCases";

export interface CreateOrder extends UseCaseWithParams<any, void> {
}

export const CreateOrderUseCase = (): CreateOrder => {
    const run = (): Promise<void> => {
        return Promise.resolve();
    }

    return {
        run
    }

}
