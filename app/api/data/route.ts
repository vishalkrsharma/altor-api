import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
  } catch (error) {
    const data = await db.data.findMany();
    console.log('[DATA_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
