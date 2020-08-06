import express from 'express';

const router: express.Router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {title: 'Exoress'});
});

module.exports = router;