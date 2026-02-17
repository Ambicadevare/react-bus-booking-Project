import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home(){
  const [from,setFrom]=useState("");
  const [to,setTo]=useState("");
  const navigate=useNavigate();

  const search=()=>{
    navigate("/buses",{state:{from,to}});
  }

  return(
    <div style={{padding:"30px"}}>
      <h2>Search Bus</h2>

      <input placeholder="From" onChange={e=>setFrom(e.target.value)}/>
      <br/><br/>

      <input placeholder="To" onChange={e=>setTo(e.target.value)}/>
      <br/><br/>

      <button onClick={search}>Search</button>
    </div>
  )
}
export default Home;
