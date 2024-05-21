import mongoose from "mongoose";

DBconnect
export async function DBconnect() {
    try {
        await mongoose.connect("mongodb+srv://Zain:JuOFNI6BByil4T6w@cluster0.uhzkhgi.mongodb.net/")
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('MongooseDB Successfully Connected')
        })

        connection.on('error', () => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ')
        })
        
    } catch (error) {

        console.log("Some thing Wrong in MongooseDB Connnection: ", error)
        
    }
}