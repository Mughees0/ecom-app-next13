"use client";
import { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/navigation";

function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
}) {
  const [title, setTitle] = useState(existingTitle);
  const [description, setDescription] = useState(existingDescription);
  const [price, setPrice] = useState(existingPrice);
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();
  const data = { title, description, price };

  async function createProduct(e) {
    e.preventDefault();
    if (_id) {
      await Axios.put(
        "/api/v1/product",
        { ...data, _id },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
    } else {
      await Axios.post("/api/v1/product", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
    }
    setGoToProducts(true);
  }

  if (goToProducts) {
    router.push("/products");
  }
  return (
    <form onSubmit={createProduct} className="flex flex-col w-full">
      <label htmlFor="name">Product name</label>
      <input
        type="text"
        id="name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Product name"
      />
      <label htmlFor="description">Description</label>
      <textarea
        value={description}
        id="description"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="price">Price ($US)</label>
      <input
        value={price}
        type="number"
        id="price"
        placeholder="Price "
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit" className="btn-primary self-start">
        Save
      </button>
    </form>
  );
}

export default ProductForm;
