import axios from "../api/index";
import { useState, useEffect } from "react";

export const useFetch = (api, ...rest) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    axios
      .get(api)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setloading(false);
      });
  }, [...rest]);

  return { data, loading };
};
