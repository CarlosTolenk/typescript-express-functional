import {Router} from "express";

// Modules
import LifeProofRouter from '../Modules/LifeProof/Infrastructure/Http'
import OrderRouter from '../Modules/Order/Infrastructure/Http'

const baseRouter = Router()
baseRouter.get('/', (req, res) => res.json('Up Artefact'))

baseRouter.use('/', LifeProofRouter)
baseRouter.use('/', OrderRouter)

export default baseRouter;
