import {UseCase} from "../../Shared/Domain/useCases";

export interface LivenessUseCase extends UseCase<string> {
}

export const LivenessProof = (): LivenessUseCase => {
    const run = async () => {
        return 'We are alive'
    }

    return {
        run
    }
}
