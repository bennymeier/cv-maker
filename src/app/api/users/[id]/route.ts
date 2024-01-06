import User from '@/models/User';
import dbConnect from '../../../../lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: any) {
  const id = params.id;
  await dbConnect();

  try {
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
export async function PUT(req: Request, { params }: any) {
  const data = await req.json();
  const id = params.id;
  await dbConnect();

  if (!req.body) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  try {
    const user = await User.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!user) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
export async function DELETE(req: Request, { params }: any) {
  const id = params.id;
  await dbConnect();

  try {
    const deletedUser = await User.deleteOne({ _id: id });
    if (!deletedUser) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    return NextResponse.json({ success: true, data: {} }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
