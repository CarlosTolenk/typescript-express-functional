export interface UseCases<T,R>{
    run(params: T): R
}

export interface UseCase<R> {
    run(): R
}
