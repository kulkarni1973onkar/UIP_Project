const { MongoClient } = require('mongodb');


const uri = 'mongodb://localhost:27017'; 


const dbName = 'BooksBuzz'; 


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        
        await client.connect();
        console.log('Connected successfully to MongoDB server');

        
        const db = client.db(dbName);
        
        

    ClientSession
        const collection = db.collection('mycollection');
        const query = {};
        const result = await collection.find(query).toArray();
        console.log('Query result:', result);

    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    } finally {
        
        await client.close();
        console.log('MongoDB client closed');
    }
}


connectToMongoDB();
