// import Spinner from "./../components/sections/Spinner";
import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchProducts = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      setIsLoading(true);
      axios({
        method: "get",
        url: url,
        crossdomain: true,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then((res) => {
        setProducts(res.data);
      });
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  return { products, isLoading };
};
