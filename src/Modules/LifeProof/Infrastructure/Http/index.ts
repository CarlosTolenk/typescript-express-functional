import {Router} from "express";

import {ContainerHealthController, ContainerLivenessController} from "../container";

const router = Router();

router.get('/health', ContainerHealthController);
router.get('/liveness', ContainerLivenessController);


export default router;
