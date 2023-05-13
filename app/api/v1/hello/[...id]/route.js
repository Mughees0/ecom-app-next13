import { NextResponse } from "next/server";
import { Product } from "@/models/Product";
import mongooseConnect from "@/lib/mongoose";
import { log } from "console";

export async function GET(request, { params }) {
  await mongooseConnect();
  // const { searchParams } = new URL(request.url);

  const { id } = params;

  return NextResponse.json({ message: "hello test", id });
}

export async function POST(request) {
  await mongooseConnect();
  const { title, description, price } = await request.json();
  const prodDoc = await Product.create({ title, description, price });
  return NextResponse.json(prodDoc);
}
