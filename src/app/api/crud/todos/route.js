
import { NextResponse } from "next/server";
import Todo from "@/models/todo.model";
import { DBconnect } from "@/db/dbConfige";


DBconnect()


export async function GET(request){
    try {

        const todos = await Todo.find({})




        return NextResponse.json(
            {
                todos,
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