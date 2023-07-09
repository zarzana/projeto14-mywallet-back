import { db } from "../database.js";
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

export async function signUp(req, res) {

    const { name, email, password } = req.body;

    const userWithSameEmail = await db.collection('users').findOne({ 'email': email });

    if (userWithSameEmail) {

        res.status(409).send('Email já cadastrado.');

    } else {

        const passwordHash = bcrypt.hashSync(password, 10);
        await db.collection('users').insertOne({ name, email, 'password': passwordHash });

        res.sendStatus(201);

    }

}

export async function signIn(req, res) {

    const { email, password } = req.body;

    const user = await db.collection('users').findOne({ 'email': email });

    if (user) {

        if (bcrypt.compareSync(password, user.password)) {

            const token = uuid();
            await db.collection('sessions').insertOne({ 'userId': user._id, 'token': token });

            return res.status(200).send({'name': user.name, 'token': token});

        }

        else {
            return res.status(401).send('Senha inválida.');
        }


    } else {
        return res.status(404).send('Email não cadastrado.');
    }

}