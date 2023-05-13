"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import Axios from "axios";

function DeleteProductPage() {
  const router = useRouter();
  function goBack() {
    router.push("/products");
  }
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
      <h1>Do you really want to delete product {id}</h1>
      <button>YES</button>
      <button onClick={goBack}>NO</button>
    </>
  );
}

export default DeleteProductPage;
