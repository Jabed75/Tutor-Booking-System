import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";


const client = new MongoClient(process.env.MONGODB_URI); 

const db = client.db("mediqueue");

export const auth = betterAuth({
  
  database: mongodbAdapter(db),
  
  emailAndPassword: { 
    enabled: true, 
  },
  // plagin

  session:{
   cookieCache:{
    enabled:true,
    strategy: "jwt",
    // max 7 day
    maxAge: 7 * 24 * 60 * 60
   }
  },
  plugins:[
    jwt()
  ]
});