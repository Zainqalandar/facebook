import mongoose from "mongoose"


export async function connect() {
    try {
        mongoose.connect('mongodb+srv://zainqlandar:HcpXXZYA4GF8x3GS@cluster0.njoe07n.mongodb.net/')
        const connection =  mongoose.connection

        connection.on('connected', () => {
            console.log('MongoDB connected successfully')
        })
        connection.on('error', ( err: any) => {
            console.log('MongoDB connection error', err)
            process.exit()
        })
        
    } catch (error) {
        console.log('Something went wrong while connecting to database', error)
    }
    
}

