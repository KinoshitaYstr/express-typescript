import express from 'express';

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send('respond with a resource');
})

module.exports = router;