

import { NextResponse } from "next/server";
import Todo from "@/models/todo.model";
import { DBconnect } from "@/db/dbConfige";


DBconnect()


export async function POST(request){
    try {

        const reqBody = await request.json();
        console.log('reqBody', reqBody)

        const {id} = reqBody
        console.log('reqBody', reqBody)

       const existTodo  = await Todo.findById(id)

        if (!existTodo) {
            return NextResponse.json(
                {
                    error: "Todo does not exist",
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                existTodo,
                success: true,
            },
            { status: 200 }
        );
        
    } catch (error) {
        return NextResponse.json(
            {
                error: error.message,
            },
            { status: 500 }
        );
        
    }
}