import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";

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
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
    }

};
