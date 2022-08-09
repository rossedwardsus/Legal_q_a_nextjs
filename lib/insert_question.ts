
import  { MongoClient } from "mongodb";

import clientPromise from "./db";

const insert_question = async () => {

  try {
    const cp = await clientPromise;
    const db = await cp.db('test_databasex');
    // Query for a movie that has the title 'Back to the Future'
    //const query = { title: "Record of a Shriveled Datum" };
    //const movie = await movies.findOne(query);

    const movies_collection = await db.collection("test_collection");
    // Query for a movie that has the title 'Back to the Future'
    const insert = { datetime: "", event: "Record of a Shriveled Datum11111from lib" };
    const inserted_question = movies_collection.insertOne(insert);
    console.log(inserted_question);

    console.log(inserted_question);
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }

}

export default insert_question;