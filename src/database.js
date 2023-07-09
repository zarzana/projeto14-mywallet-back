import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

mongoClient.connect()
    .then(() => console.log('MongoDB Connected!'))
    .catch((err) => console.log(err.message));

export const db = mongoClient.db();