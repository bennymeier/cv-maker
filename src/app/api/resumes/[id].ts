import Resume from '@/models/Resume';
import dbConnect from '../../../lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  await dbConnect();

  try {
    const resume = await Resume.findById(id);
    if (!resume) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    return NextResponse.json({ success: true, data: resume }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  await dbConnect();

  if (!req.body) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  try {
    const resume = await Resume.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!resume) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    return NextResponse.json({ success: true, data: resume }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  await dbConnect();

  try {
    const deletedResume = await Resume.deleteOne({ _id: id });
    if (!deletedResume) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    return NextResponse.json({ success: true, data: {} }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
