import application from './App'
import {connectToDatabase} from "./Modules/Shared/Infrastructure/Persistence/typeormconfig";
import Logger from "./Modules/Shared/Infrastructure/Logger";

const port = process.env.PORT || '3000';

(async () => {
    try {
        await connectToDatabase();

        application.listen(port, () => {
            Logger().info(`Server is listening on ${port}`)
        });
    } catch (error) {
        Logger().error(`Error starting the application: ${JSON.stringify(error)}`);
    }

})();
