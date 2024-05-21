import mongoose from "mongoose";


const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Content Field is Require']
    },
    description: {
        type: String,
        required: [true, 'Description Field is Require']
    },
    complete: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Todo = mongoose.models.todos || mongoose.model('todos', todoSchema)

export default Todo