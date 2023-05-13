import { NextResponse } from "next/server";
import { Product } from "@/models/Product";
import mongooseConnect from "@/lib/mongoose";

export async function GET(request, { params }) {
  await mongooseConnect();
  const { id } = params;

  return NextResponse.json(await Product.findById(id));
}

// export async function POST(request) {
//   await mongooseConnect();
//   const { title, description, price } = await request.json();
//   const prodDoc = await Product.create({ title, description, price });
//   return NextResponse.json(prodDoc);
// }
