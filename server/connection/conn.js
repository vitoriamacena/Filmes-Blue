import mongoose from "mongoose";

const conn = () => {mongoose.connect('mongodb://localhost:27017/filmes',
    {
        useNewUrlParser: true
    }
    ).then( () => {console.log("Mongodb connected")}
    ).catch( (err) => {
        return console.log(`Connection to database failed ${err}`)
    });

};

export default conn;
