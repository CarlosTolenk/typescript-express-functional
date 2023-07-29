import {UseCase} from "../../Shared/Domain/useCase";

export interface LivenessUseCase extends UseCase<never, Promise<string>> {
}

export const LivenessUseCase = (): LivenessUseCase => {
    const run = async () => {
        return 'We are alive'
    }

    return {
        run
    }
}
