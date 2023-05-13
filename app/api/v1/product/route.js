import { NextResponse } from "next/server";
import { Product } from "@/models/Product";
import mongooseConnect from "@/lib/mongoose";

export async function GET() {
  await mongooseConnect();
  return NextResponse.json(await Product.find());
}

export async function POST(request) {
  await mongooseConnect();
  const { title, description, price } = await request.json();
  const prodDoc = await Product.create({ title, description, price });
  return NextResponse.json(prodDoc);
}

export async function PUT(request) {
  await mongooseConnect();
  const { title, description, price, _id } = await request.json();
  const updateDoc = await Product.updateOne(
    { _id },
    { title, description, price }
  );
  return NextResponse.json(updateDoc);
}
