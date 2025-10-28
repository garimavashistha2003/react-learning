
import { useState, useEffect } from "react";

// const url = "https://jsonplaceholder.typicode.com/users";

function useFetch(url){

    const [data , setData ] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    
      useEffect(() => {
        setIsPending(true);
        async function fetchData(){

            try{
                const res = await fetch(url);
                if(!res.ok){
                    throw Error("something went wrong ");
                }
                const resData = await res.json();
                
                setData(resData);
                setIsPending(false);

            }catch(error){
                setError(error.message);
                setIsPending(false);
                setError(null);

            }

        }
        fetchData();
      } , [url]);
      return {data , isPending , error};
}

export default useFetch;