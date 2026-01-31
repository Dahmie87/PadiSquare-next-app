import { NextRequest, NextResponse } from 'next/server';

// This is your data - in FastAPI this was at the top level
const vendors = {
  1: {
    name: "Adenike Veges",
    product_ad: "Fresh Nigerian Harvest 2026",
    product_ad_details: "",
    is_verified: true,
    products: {
      1: { name: "", price: "", description: "", category: "a", image: 1 },
      2: { name: "", price: "", description: "", category: "b", image: 2 },
      3: { name: "", price: "", description: "", category: "c", image: 3 },
      4: { name: "", price: "", description: "", category: "d", image: 4 },
      5: { name: "", price: "", description: "", category: "f", image: 5 },
      6: { name: "", price: "", description: "", category: "e", image: 6 },
    }
  }
};

// This replaces your @app.get('/vendors/{vendor_id}') decorator
export async function GET(
  request: NextRequest,
  { params }: { params: { vendor_id: string } }
) {
  // Parse the vendor_id from the URL (it comes as a string)
  const vendorId = parseInt(params.vendor_id);

  // Check if vendor exists
  if (!vendors[vendorId as keyof typeof vendors]) {
    return NextResponse.json(
      { error: "Vendor not found" },
      { status: 404 }
    );
  }

  // Return the vendor data
  return NextResponse.json(vendors[vendorId as keyof typeof vendors]);
}