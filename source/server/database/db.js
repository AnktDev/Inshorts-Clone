import mongoose from "mongoose";




const Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-fi4pw2l-shard-00-00.rcpwuoh.mongodb.net:27017,ac-fi4pw2l-shard-00-01.rcpwuoh.mongodb.net:27017,ac-fi4pw2l-shard-00-02.rcpwuoh.mongodb.net:27017/?ssl=true&replicaSet=atlas-495pvj-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL,{useNewUrlParser: true });
       console.log('database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database',error);
    }
}

export default Connection;