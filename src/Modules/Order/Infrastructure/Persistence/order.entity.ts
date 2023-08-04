import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Orders {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    amount: number;

    @Column()
    description: string;
}
