import bodyparser from 'body-parser';
import cors from 'cors';
import express from 'express';
import handlebars from 'express-handlebars';
import log from 'fancy-log';
import morganbody from 'morgan-body';
import { gigRoutes } from './routes';

try {
    const app = express();
    morganbody(app);
    app.use(bodyparser.json());
    app.use(cors());
    app.engine('handlebars', handlebars({
        defaultLayout: 'main',
    }));
    app.use('/gigs', gigRoutes);
    app.get('/', (_, res) => res.send('index'));
    const port = process.env.PORT || 5000;
    app.listen(port, log(`Server started on port ${port}`));
} catch (err) {
    log.error(err);
}