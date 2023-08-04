import {Request, Response} from "express";
import {StatusCodes} from 'http-status-codes';

import {HealthUseCase} from "../../../Application/healthProof";


type HealthControllerProps = {
    useCase: HealthUseCase
}

export const HealthController = ({useCase}: HealthControllerProps) => async (req: Request, res: Response) => {
    try {
        const response = await useCase.run();
        return res.json(response);
    } catch (error) {
        console.error(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
    }
};
