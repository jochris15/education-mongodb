import { MongoClient } from "mongodb";

const uri = "mongodb+srv://jchristian:3Alf5zFiIuGAUqcm@cluster0.kbw9eul.mongodb.net/";
let db = null
let client = null

function connect() {
    try {
        client = new MongoClient(uri);
        db = client.db('lecture');

        return db
    } catch (error) {
        console.log(error);
    }
}

// tujuan kita membuat 2 function adalah supaya ga ada multiple connection
function getDB() {
    if (!db) {
        connect()
    }

    return db
}

export { connect, getDB }



