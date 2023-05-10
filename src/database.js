import {connect} from "mongoose";

(async () =>{
    try {
        const db = await connect("mongodb://0.0.0.0:27017/musicas");
        console.log('DB conectada a', db.connection.name);
    }catch(error){
        console.error(error);
    }
})();