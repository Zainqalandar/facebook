import { NextResponse } from "next/server";
import Todo from "@/models/todo.model";
import { DBconnect } from "@/db/dbConfige";


DBconnect()


export async function POST(request){
    try {

        const reqBody = await request.json()

        const {title, description} = reqBody
        console.log('reqBody', reqBody)

        const newTodo = new Todo({
            title,
            description
        })

        await newTodo.save()

        return NextResponse.json(
            {
                message: "Todo Succefully Created",
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