import db from '@/lib/db';
import { NextResponse } from 'next/server';
import data from '@/data.json';

export async function GET(req: Request) {
  const da = data;
  try {
    da.forEach(
      async (dat) =>
        await db.data.create({
          data: {
            device_brand: dat.device_brand,
            model: dat.model,
            processor: dat.processor,
            sdk_int: dat.sdk_int,
            username: dat.username,
            vehicle_brand: dat.vehicle_brand,
            vehicle_cc: dat.vehicle_cc,
            vehicle_type: dat.vehicle_type,
            zone: dat.zone,
          },
        })
    );

    const data = await db.data.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.log('[DATA_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
