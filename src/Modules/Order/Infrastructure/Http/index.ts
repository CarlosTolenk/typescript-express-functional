import {Router} from "express";

// Containers Injection
import {ContainerGetAllOrderController} from "../container";


const router = Router();

const basePath = '/order'
router.get(`${basePath}/`, ContainerGetAllOrderController);

export default router;
