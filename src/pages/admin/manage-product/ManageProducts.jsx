import React, { useEffect, useState } from 'react'
import Products from "../../../components/products/Products";
import axios from 'axios';


const ManageProducts = () => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [reload, setReload] = useState(true);

   useEffect(() => {
    setLoading(true);
    axios
      .get(" http://localhost:5000/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [reload]);

  
  

  return (
    <div className="container">
      <h2>Manage Products</h2>
      <Products isAdmin={true} data={data} setReload={setReload} />
    </div>
  );
};

export default ManageProducts;
