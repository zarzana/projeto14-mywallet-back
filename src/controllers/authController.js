import { db } from "../database.js";
import bcrypt from 'bcrypt';

export async function signUp(req, res) {

    const {name, email, password} = req.body;

    const userWithSameEmail = await db.collection('users').findOne({ 'email': email });

    if(userWithSameEmail) {

        res.status(409).send('Email já cadastrado.');

    } else {

        const passwordHash = bcrypt.hashSync(password, 10);
        await db.collection('users').insertOne({ name, email, 'password': passwordHash });
    
        res.sendStatus(201);

    }

}

export async function signIn(req, res) {
    /// ....
}