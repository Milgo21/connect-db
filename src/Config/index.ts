import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(__dirname, '../../.env') })
import mssql from 'mssql'
export const sqlConfig = {
    user:process.env.DB_USER,
    password:process.env.DB_PWD,
    database:process.env.DB_NAME,
    server: 'localhost',

pool: {
    max: 10,
    min: 0, 
    idleTimeoutMillis: 30000
},
options:{
    encrypt: false, // for azure  
    trustServerCertificate: false // change to true for local dev / self-signed certs  
  }
}
console.log('Running');



const checkConnection = async ()=>{
try {
  const x = await mssql.connect(sqlConfig)
  if(x.connected){
  console.log("Connected to the Database");
} 
} catch (error) {
  console.log(error);
  }
}

checkConnection()








