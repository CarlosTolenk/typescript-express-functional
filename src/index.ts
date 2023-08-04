import app from './App'
import {connectToDatabase} from "./Modules/Shared/Infrastructure/typeormconfig";

const port = process.env.PORT || '3000';

(async () => {
    try {
        await connectToDatabase();

        app.listen(port, () => {
            console.log(`Server is listening on ${port}`);
        });
    } catch (error) {
        console.error("Error starting the application:", error);
    }

})();
