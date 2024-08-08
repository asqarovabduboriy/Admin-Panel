import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { IoIosCloseCircle } from "react-icons/io";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const API_URL = "http://localhost:5000/products";

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      price: parseFloat(price),
      description,
      category,
      image: preview,
    };

    axios
      .post(API_URL, newProduct, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        toast.success("Product added successfully!");
        setTitle("");
        setPrice("");
        setDescription("");
        setCategory("");
        setImage(null);
        setPreview("");
      })
      .catch((error) => {
        console.error("There was an error adding the product!", error);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setPreview("");
    }
  };



  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="product-form">
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        {preview && (
          <div className="image-preview-container">
            <img src={preview} alt="Preview" className="image-preview" width={100} height={100} />
            <IoIosCloseCircle onClick={() => setPreview("")} />
          </div>
        )}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
