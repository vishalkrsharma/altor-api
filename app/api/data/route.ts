import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const data = await db.data.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.log('[DATA_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
