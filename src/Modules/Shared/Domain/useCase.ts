export interface UseCase<T,R>{
    run(params?: T): R
}
