// const mysqlDriver = require('mysql2');
const mongoose = require('mongoose');

// const sqlDBconnection = mysqlDriver.createConnection({
//     host     : 'host.docker.internal',
//     user     : 'root',
//     password : 'qwerty123',
//     database : 'user_db'
// });

// const DATABASE_URL = process.env.DATABASE_URL;
// const DATABASE_NAME = process.env.DATABASE_NAME;

const nosqlDBconnecttion = () => {
    // const url = `mongodb://${DATABASE_URL}/${DATABASE_NAME}`;
    const url  = `mongodb+srv://ashish:ashish@cluster0.huzrl.mongodb.net/?retryWrites=true&w=majority`
   
    try {
        mongoose.connect(url, { serverApi: { version: '1', strict: true, deprecationErrors: true } });
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
    const dbConnection = mongoose.connection;
    
    dbConnection.once("open", (_) => {
        console.log(`Database connected: ${url}`);
    });
   
    dbConnection.on("error", (err) => {
        console.error(`connection error: ${err}`);
    });
    return;
}

module.exports = {
    // sqlDBconnection,
    nosqlDBconnecttion
}
