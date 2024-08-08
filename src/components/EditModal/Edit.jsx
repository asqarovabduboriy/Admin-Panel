import React from "react";
import "./Edit.scss";
import axios from "axios";

const Edit = ({ edit, setEdit, setReload }) => {
  const handleEdit = () => {
    axios.put(`http://localhost:5000/products/${edit.id}`, edit).then((res) => {
      setEdit(null);
      setReload((prev) => !prev);
    });
  };


;

  return (
    <>
      <div className="edit_wrapper" onClick={() => setEdit(null)}></div>
      <div className="edit_modal">
        <div className="edit_form">
          <h2>Edit Product</h2>
          <label> Title </label>
          <input
            value={edit.title}
            onChange={(e) =>
              setEdit((prev) => ({ ...prev, title: e.target.value }))
            }
            type="text"
            placeholder="title"
          />
          <label> Description </label>
          <input
            value={edit.description}
            onChange={(e) =>
              setEdit((prev) => ({ ...prev, description: e.target.value }))
            }
            type="text"
            placeholder="description"
          />
          <label> Price </label>
          <input
            value={edit.price}
            onChange={(e) =>
              setEdit((prev) => ({ ...prev, price: e.target.value }))
            }
            type="text"
            placeholder="price"
          />
          <label> Category </label>
          <input
            value={edit.category}
            onChange={(e) =>
              setEdit((prev) => ({ ...prev, category: e.target.value }))
            }
            type="text"
            placeholder="category"
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setEdit(null)  }>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default Edit;
