import useCustomData from "../useCustom.js";
// import custom from "../useCustom.js";
const Temp=()=>{
    const data=useCustomData();
    return(
        <>
        <h1>data:{data.results[0].gender}</h1>
        </>
    )
}

export default Temp;