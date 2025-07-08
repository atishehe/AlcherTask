import { useEffect, useState } from "react";

export function useFetch(url){
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    useEffect(()=>{
        const fetchData= async ()=>{
        setLoading(true)
        try {
            const res = await fetch(url);
            if(!res.ok){
                throw new Error(`HTTP error! status:${res.status}`);
            }
            else{
                const json = await res.json();
                setData(json);
                console.log(data)
                setError(null);
            }
        } catch (error) {
            setError(error.message)
            console.log(error.message)
        } finally{
            setLoading(false)
        }
        
    }     
    fetchData();

    },[url])
    return {loading,data,error}
}