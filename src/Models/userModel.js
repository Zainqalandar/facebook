import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    userName : {
        type: String,
        require: [true, 'userName is required'],
        unique: true
    },
    email : {
        type: String,
        require: [true, 'email is required'],
        unique: true
    },
    password : {
        type: String,
        require: [true, 'password is required']
    },
    isVarified : {
        type: Boolean,
        default: false
    },
    isAmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiration: Date,
    varifyToken: String,
    varifyTokenExpiration: Date
    
})

const User = mongoose.models.users || mongoose.model('users', userSchema)

export default User

