import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";


type CreateOrderControllerProps = {}

export const GetAllOrderController = ({}: CreateOrderControllerProps) => async (req: Request, res: Response) => {
    try {
        const response = [{}]
        return res.json(response);
    } catch (error) {
        console.error(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
    }
}
