
import  { MongoClient } from "mongodb";

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

//const db_movies_collection = () => {

  const uri = "mongodb://localhost:27017?retryWrites=true&writeConcern=majority";
  client = new MongoClient(uri);

  let globalWithMongoClientPromise = global as typeof globalThis & {
    _mongoClientPromise: Promise<MongoClient>;
  };

  if (!globalWithMongoClientPromise._mongoClientPromise) {
    client = new MongoClient(uri);
    globalWithMongoClientPromise._mongoClientPromise = client.connect();
  }

  clientPromise = globalWithMongoClientPromise._mongoClientPromise;

  //try {
    //const database = client.db('test_databasex');
    //global._mongoClientPromise = client.connect();
  //}
  //clientPromise = global._mongoClientPromise;


    //const movies_collection = database.collection('test_collection');
    // Query for a movie that has the title 'Back to the Future'
    //const query = { title: "Record of a Shriveled Datum" };
    //const movie = await movies.findOne(query);
    //console.log(movie);
  //  return database;
  //} finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  //}

//}

export default clientPromise;