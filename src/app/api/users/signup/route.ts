import { connect } from "@/dbConfig/dbConfig";
import User from "@/Models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import { sandEmail } from "@/helpers/maller";



connect();

export async function POST(request: NextRequest) {

  try {
    const reqBody = await request.json();
    const { email, password, userName } = reqBody;

    console.log(reqBody)

    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);  
    const hachedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      userName,
      email,
      password: hachedPassword,
    });

    const saveUser = await newUser.save();
    console.log(saveUser);

    // send email varification
    await sandEmail({ email, emailType: "VARIFY", userId: saveUser._id });

    return NextResponse.json({
      message: "User register Successfully",
      success: true,
      saveUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
