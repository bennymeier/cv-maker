import Resume from '@/models/Resume';
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';

export async function GET() {
  await dbConnect();
  try {
    const resumes = await Resume.find({});
    return NextResponse.json({ success: true, data: resumes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
export async function POST(req: Request) {
  await dbConnect();
  try {
    const resume = await Resume.create(req.body);
    return NextResponse.json({ success: true, data: resume }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
