import {createConnection} from "typeorm";
import {glob} from "glob";
import * as path from "path";

export const connectToDatabase = async () => {
    const entities = glob.sync(path.join(__dirname, "../../../../Modules/*/Infrastructure/Persistence/**/*.entity.ts"));

    return await createConnection({
        type: "sqlite",
        database: "./database.sqlite",
        entities,
        migrations: [__dirname + "./Migrations/*.ts"],
        synchronize: true,
    });
};
