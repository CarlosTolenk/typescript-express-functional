import express, {Express} from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";

import routerIndex from './router'

const app: Express = express()
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(compression());

const basePath = '/'
app.use(basePath, routerIndex)


const onHandlerError = (error: Error) => {
    console.error((new Date).toUTCString(), error.message)
    console.error(error.stack)
    setTimeout(() => {
        process.exit(1)
    }, 200)
}

process.on('unhandledRejection', onHandlerError)
process.on('uncaughtException', onHandlerError)
process.on('SIGTERM', onHandlerError)


export default app
