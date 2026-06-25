import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// ১ নম্বর ভুল সংশোধন: process.env.MONGODB_URL-এর জায়গায় MONGODB_URI ব্যবহার করুন
// (অথবা আপনার .env ফাইলে যা নাম আছে হুবহু সেটাই দিন)
const client = new MongoClient(process.env.MONGODB_URI); 

const db = client.db("mediqueue");

export const auth = betterAuth({
  // ২ নম্বর ভুল সংশোধন: better-auth-এর মঙ্গোডিবি অ্যাডাপ্টারে সরাসরি 'db' পাস করতে হয়
  database: mongodbAdapter(db),
  
  emailAndPassword: { 
    enabled: true, 
  }
});