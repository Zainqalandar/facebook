import { connect } from '@/dbConfig/dbConfig';
import User from '@/Models/userModel';
import { NextResponse, NextRequest } from 'next/server';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log('Token', token);

    const user = await User.findOne({
      varifyToken: token,
      varifyTokenExpiration: { $gt: Date.now() },
    });

    if (!user) {
        return NextResponse.json({ error: 'Invalid Token' }, { status: 400 });
    }

    console.log(user)

    user.isVarified = true
    user.varifyToken = undefined
    user.varifyTokenExpiration = undefined

    await user.save()

    return NextResponse.json({ message: 'Eamil Varified Successsfull ' }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
