import {Request, Response} from "express";
import {HealthUseCase} from "../../../Application/healthUseCase";


type HealthControllerProps = {
    useCase: HealthUseCase
}

export const HealthController = ({useCase}: HealthControllerProps) => async (req: Request, res: Response) => {
    try {
        const response = await useCase.run();
        return res.json(response);
    } catch (error) {
        console.error(error)
        return res.status(500).json(error.message);
    }
};
