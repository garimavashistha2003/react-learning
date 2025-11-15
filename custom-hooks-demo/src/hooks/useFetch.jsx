import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIssPending] = useState(false);
  const [iserror, setError] = useState(null);
  useEffect(() => {
    setIssPending(true);
    const controller = new AbortController();
    async function fetchData() {
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw Error("Something went wrong!!");
        }
        const resData = await res.json();

        setData(resData);
        setError(null);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIssPending(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data: data, isPending: isPending, iserror: iserror };
}

export default useFetch;

// ▶ phli request Strict Mode li vjh se abort hoti  h
// ▶ dusri  request hi asli or successful hoti hai
// ▶ Cleanup dusri request ko interrupt nhi krta bcoz component unmount nhi hota

//error main cond --> Agar error AbortController ka nahi hai → UI me error dikhao
//  Agar error AbortController ka hai → UI me kuch mat dikhao
