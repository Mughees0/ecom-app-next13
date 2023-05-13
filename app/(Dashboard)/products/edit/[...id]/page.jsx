import Layout from "@/components/Layout";
import ProductForm from "@/components/productForm";
import Axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function EditProductPage() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    Axios.get("api/products?id=" + id).then((res) => res.data);
  }, [id]);
  return (
    <Layout>
      <ProductForm />
    </Layout>
  );
}

export default EditProductPage;
