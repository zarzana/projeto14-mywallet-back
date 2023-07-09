import { db } from "../database.js";

export async function postRecord(req, res) {

    const { value, description, type } = req.body;
    const user = res.locals.user;
    console.log(user);

    await db.collection('records').insertOne({ 'userId': user._id, 'value': value, 'description': description, 'type': type });

    res.sendStatus(201);

}

export async function getRecord(req, res) {
    /// ....
}