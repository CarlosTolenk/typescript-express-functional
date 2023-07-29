import {Router} from "express";
import {helloHandler, rootHandler} from "../handlers";

const router = Router()

router.get('/', rootHandler);
router.get('/hello/:name', helloHandler);

export default router;
