"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Axios from "axios";

function DeleteProductPage() {
  const [productInfo, setProductInfo] = useState(null);
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

  async function deleteProduct() {
    await Axios.delete("/api/v1/products/" + id);
    goBack();
  }

  return (
    <>
      <h1 className=" text-center">
        Do you really want to delete product &nbsp;"{productInfo?.title}"?
      </h1>
      <article className="flex gap-2 justify-center ">
        <button onClick={deleteProduct} className=" btn-red">
          YES
        </button>
        <button className=" btn-default" onClick={goBack}>
          NO
        </button>
      </article>
    </>
  );
}

export default DeleteProductPage;
