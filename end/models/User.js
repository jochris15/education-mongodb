import { ObjectId } from "mongodb";
import { getDB } from "../mongodb.js"

export default class User {
    static getCollection() {
        const db = getDB()
        const collection = db.collection('users');

        return collection
    }


    static async findAll() {
        const collection = User.getCollection()
        // diconvert jadi array karena hasil datanya find adalah cursor
        const users = await collection.find().toArray()

        return users
    }

    static async findOne(userId) {
        const collection = User.getCollection()

        // karena userId type string, sedangkan id di mongoDb typenya ObjectId
        const objectId = new ObjectId(userId)

        const user = await collection.findOne({ _id: objectId })

        if (!user) throw { name: "NotFound" }

        return user
    }

    static async create(payload) {
        const collection = User.getCollection()
        await collection.insertOne(payload)

        return "Succeed create new user"
    }
}

