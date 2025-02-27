import { useEffect,useState } from "react";

const useCustomData=()=>{
    const [data,setData]=useState(null);
    useEffect(()=>{

        getUserData();

    },[])

    async function getUserData(){
        const data=await fetch("https://randomuser.me/api/");
        const cleaned=await data.json();
        setData(cleaned)
    }
    return data;
}

export default useCustomData;