import { NextRequest, NextResponse } from 'next/server';
import { vendors } from '@/lib/data';

export async function GET(
  request: NextRequest,
  { params }: { params: { vendor_id: string } }
) {
  const vendorId = parseInt(params.vendor_id);
  if (!vendors[vendorId as keyof typeof vendors]) {
    return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
  }
  return NextResponse.json(vendors[vendorId as keyof typeof vendors]);
}