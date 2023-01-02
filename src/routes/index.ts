import express from 'express';

const routes = express.Router();

routes.use()

routes.get('/', (req, res) => {
    res.send('I am right here :)')
});

export default routes;