import express from 'express';
import helmet from "helmet";
import bodyParser from "body-parser";
import compression from 'compression';
import cors from 'cors';

import { rootHandler, helloHandler } from './handlers';

const app = express();
const port = process.env.PORT || '3000';

app.use(helmet())
    .use(cors())
    .use(bodyParser.json())
    .use(
        bodyParser.urlencoded({
            extended: false
        })
    )
    .use(compression());


app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);


app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
})
