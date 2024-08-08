import React, { useState, useEffect } from "react";
import "./Products.scss";
import { memo } from "react";
import axios from "axios";
import Edit from "../EditModal/Edit";


const Products = ({ data, isAdmin, setReload }) => {
 
   const [edit, setEdit] = useState(null)

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
       axios
      .delete(`http://localhost:5000/products/${id}`)
      .then((res) => setReload((p) => !p))
    }
   
  };

  

  const productItems = data?.map((el, index) => (
    <div key={el.id} className="card">
      <img src={el.image} alt="" />
      <h3 title={el.title}>
        {el.title.length > 20 ? el.title.slice(0, 20) + "..." : el.title}
      </h3>
      <p>${el.price}</p>
      {isAdmin ? (
        <>
         <div className="btn_wrapper">
         <button className="edit" onClick={() => setEdit(el)}>Edit</button>
         <button className="delete" onClick={() => handleDelete(el.id)}>Delete</button>
         </div>
        </>
      ) : null}
    </div>
  ));

  

  return (
    <>
     <div className="wrapper">{productItems}</div>
     {edit ? <Edit edit={edit} setEdit={setEdit} setReload={setReload} /> : null}
    </>
  );
};

export default memo(Products);
