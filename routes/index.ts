import express from 'express';

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.render('index', {title: 'Exoress'});
});

module.exports = router;