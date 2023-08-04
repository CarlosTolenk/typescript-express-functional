export interface ILogger {
    info(message: string, metadata?: Object): void

    error(message: string, metadata?: Object): void
}
