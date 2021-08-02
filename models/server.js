import express from 'express';
import cors from 'cors';
import dbConnection from '../database/config.js'


class Server{
    constructor(){
       this.port = process.env.PORT;
        this.app = express();
        this.middlewares();
        this.conectarDB();
        this.routes();
    }

    routes(){


    }

 async conectarDB(){ 
     await dbConnection()
}

    middlewares(){
        this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.static('Public'))
    }

    listen(){
        this.app.listen(this.port,()=>{
          console.log(`servidor esta corriendo en el puerto ${this.port}`);
        });
      }
    }
    
 export default Server