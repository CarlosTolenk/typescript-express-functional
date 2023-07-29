import {Health} from "./health";

export interface HealthRepository {
    find(): Promise<Health>
}
