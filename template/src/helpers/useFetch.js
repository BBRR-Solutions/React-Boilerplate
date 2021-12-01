import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [response, setResponse] = useState([]);

  useEffect(async () => {
    await axios(url).then((res) => {
      setResponse(res.data);
    });
  }, []);

  return response;
};

export default useFetch;
