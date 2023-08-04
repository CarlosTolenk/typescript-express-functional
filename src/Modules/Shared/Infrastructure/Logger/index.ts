import winston from 'winston';
import {ILogger} from "../../Domain/logger";

const Logger = (): ILogger => {

    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        transports: [new winston.transports.Console(), new winston.transports.File({
            filename: 'logs/error.log', level: 'error'
        }), new winston.transports.File({filename: 'logs/combined.log'})],
    });
    const info = (message: string, metadata: Object): void => {
        logger.info(message, metadata);
    }
    const error = (message: string, metadata: Object): void => {
        logger.error(message, metadata);
    }

    return {
        info, error
    }

}

export default Logger
