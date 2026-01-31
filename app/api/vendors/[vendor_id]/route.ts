import { NextRequest, NextResponse } from 'next/server';

// This is your data - in FastAPI this was aid:1t the top level
const vendors = {
  1: {
    name: "Adenike Veges",
    product_ad: "Fresh Nigerian Harvest 2026",
    product_ad_details: "",
    is_verified: true,
    products: {
      1: {id:1, name: "Fresh Avocados", price: "₦6700.12", description: "", category: "FRUITS", image: 1 },
      2: {id:2 ,name: "Tomatoes Ripe and red", price: "₦2100.00", description: "", category: "VEGETABLES", image: 2 },
      3: {id:3, name: "Broccoli 100% natural", price: "₦199.99", description: "", category: "FRUITS VEGETABLES", image: 3 },
      4: {id:4, name: "Original Honey from Healthy Bess", price: "₦470.00", description: "", category: "DRINK", image: 4 },
      5: {id:5, name: "Grapes for Fine Wine", price: "₦68.00", description: "", category: "VEGETABLES", image: 5 },
      6: {id:6, name: "Spinach for soup", price: "₦88.00", description: "", category: "FRUITS", image: 6 },
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