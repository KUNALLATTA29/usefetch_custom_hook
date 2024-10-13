import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetch(url) {
    const [data,setdata] = useState();
    const [loading,setloading] = useState(true)

   
    const fetch=async()=>{

        try{
            let response = await axios.get(url);
            setdata(response.data.products);
            setloading(false);
        } catch{
            setloading(false);
        }
        
    }

    useEffect(()=>{
        fetch();
    },[url])
  return {data, loading};
}
