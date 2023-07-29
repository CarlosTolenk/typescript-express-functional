import {UseCase} from "../../Shared/Domain/useCases";

export interface LivenessUseCase extends UseCase<Promise<string>> {
}

export const LivenessUseCase = (): LivenessUseCase => {
    const run = async () => {
        return 'We are alive'
    }

    return {
        run
    }
}
