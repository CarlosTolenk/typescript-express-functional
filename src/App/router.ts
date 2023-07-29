import {Router} from "express";

// Modules
import LifeProofRouter from '../Modules/LifeProof/Infrastructure/Http'

const baseRouter = Router()
baseRouter.use('/', LifeProofRouter)

export default baseRouter;
