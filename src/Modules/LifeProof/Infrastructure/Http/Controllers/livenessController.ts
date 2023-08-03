import {Request, Response} from "express";
import {LivenessUseCase} from "../../../Application/livenessUseCase";

type LivenessControllerProps = {
    useCase: LivenessUseCase
}

export const LivenessController = ({useCase}: LivenessControllerProps) => async (req: Request, res: Response) => {
    try {
        const response = await useCase.run()
        return res.json(response);
    } catch (error) {
        console.error(error)
        return res.status(500).json(error.message);
    }

};
