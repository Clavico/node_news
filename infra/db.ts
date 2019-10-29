import * as mongoose from "mongoose";

class Database{
    private DB_URL = "mongodb://localhost:32773/db_portal";

    createConnection(){
        mongoose.connect(this.DB_URL);
    }
}

export default Database;

