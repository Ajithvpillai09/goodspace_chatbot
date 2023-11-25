import { useState,useEffect } from "react";
import { getHistory } from "../api/axiosApi";

const SideBar = ()=>{
    const [history,setHistory] = useState([])

    useEffect(()=>{
      async function allData(){
        const response =  await getHistory();
        console.log(response.data.data);
        setHistory(response.data.data)
      }
      
      allData()
    },[])

    return(
     <section className="sidebar">
        <div className="list">
            {history.map(data=>
             <div className="container" key={data._id}>
             <div className="content" >
               <div className="messageValue">
                   hai im ajith
                   {/* {data?.sessionReq} */}
               </div>
             </div>
           </div>
        )}
        </div>
    </section>
    )
}

export default SideBar;