import { Router } from 'express';

const router = new Router();

router.get('/v1/hello', (req, res) => {
    res.status(200).send({ msg: 'Hello from api.aidan.to' });
});

export default router;
