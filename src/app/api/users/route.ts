import User from '@/models/User';
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';

export async function GET() {
  await dbConnect();
  try {
    const users = await User.find({});
    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 400 });
  }
}
export async function POST(req: Request) {
  const data = await req.json();
  await dbConnect();
  try {
    const user = await User.create(data);
    return NextResponse.json({ success: true, data: user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
