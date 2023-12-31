import { db } from '../database.js';

export async function tokenValidator(req, res, next) {

    const authorization = req.header('authorization');
    const token = authorization?.replace('Bearer ', '');
    if (!token) { return res.sendStatus(401) };

    const session = await db.collection('sessions').findOne({ 'token': token });
    if (!session) { return res.sendStatus(401) };

    const user = await db.collection('users').findOne({ _id: session.userId });
    if (!user) { return res.sendStatus(401) };

    delete user.password;
    res.locals.user = user;

    next()

}