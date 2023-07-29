export interface UseCaseWithParams<T,R>{
    run(params: T): R
}

export interface UseCase<R> {
    run(): R
}
