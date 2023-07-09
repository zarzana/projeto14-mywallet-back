import dayjs from "dayjs";
import { db } from "../database.js";

export async function postRecord(req, res) {

    const { value, description, type } = req.body;
    const user = res.locals.user;

    await db.collection('records').insertOne({ 'userId': user._id, 'timestamp': dayjs().unix(), 'value': value, 'description': description, 'type': type });

    res.sendStatus(201);

}

export async function getRecord(req, res) {

    const user = res.locals.user;

    let records = await db.collection('records').find({ 'userId': user._id }).toArray();
    records = records.map(({userId, ...keepAttrs}) => keepAttrs)

    res.status(200).send(records);

}