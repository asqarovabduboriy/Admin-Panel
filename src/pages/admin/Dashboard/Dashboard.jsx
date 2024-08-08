import React, { useEffect, useState } from "react";
import Products from "../../../components/products/Products";
import axios from "axios";


const Dashboard = () => {
  
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
    <>
      <div className="container">
        <Products data={data} isLoading={loading}  />
      </div>
    </>
  );
};

export default Dashboard;
