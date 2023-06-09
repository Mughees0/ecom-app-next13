"use client";
import ProductForm from "@/app/components/ProductForm";
import Axios from "axios";
import { useParams } from "next/navigation";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";

function EditProductPage() {
  const [productInfo, setProductInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    async function run() {
      await Axios.get("/api/v1/products/" + id, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => setProductInfo(res.data));
    }
    run();
  }, [id]);

  return (
    <>
      <h1>Edit Product</h1>
      {productInfo && <ProductForm {...productInfo} />}
    </>
  );
}

export default EditProductPage;
