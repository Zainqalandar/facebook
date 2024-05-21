import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'User field is require'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email field is require'],
    },
    password: {
        type: String,
        required: [true, 'Password field is require']
    },
    isVerfied: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    verifyToken: String,
    verifyTokenExpiry: Date

})

 const Person  = mongoose.models.users || mongoose.model('persons', userSchema)

 export default Person
