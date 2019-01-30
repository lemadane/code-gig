import express from 'express';
import log from 'fancy-log';
import { GigSchema } from '../schemas';

export const gigRoutes = express.Router();

gigRoutes
    .get('/', async (_, res) => {
        try {
            gigs = await GigSchema.findAll();
            log(gigs);
            res.send(gigs).sendStatus(200);
        } catch (err) {
            log.error(err);
            res.send(gigs).sendStatus(400);
        }
    })
    .get('/add', async (_, res) => {
        try {
            await GigSchema.sync({
                force: true,
            });

            const data = {
                title: 'Looking for a React developer',
                technologies: 'react, javascript, html, css',
                budget: '$3000',
                description: 'should have minimum react dev experience of 3 years',
                email: 'user1@gmail.com'
            }

            const result = await GigSchema.create(data)
                .catch(err => log('Error: ', err));
            log(result);
            res.sendStatus(201);
        } catch (err) {
            log.error(err);
            res.sendStatus(400);
        }
    });