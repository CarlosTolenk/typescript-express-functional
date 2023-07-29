import {Request, Response} from "express";
import {LivenessUseCase} from "../../../Application/livenessUseCase";

type LivenessControllerProps = {
    useCase: LivenessUseCase
}

export const LivenessController = ({useCase}: LivenessControllerProps) => async (req: Request, res: Response) => {
    const response = await useCase.run()
    return res.json(response);
};
