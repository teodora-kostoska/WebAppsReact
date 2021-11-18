import MyList from "./MyList"
import React, { useEffect, useState } from "react"
const MyContainer = () =>{
    const [items, setItems] = useState([
        {id: "1", text: "This is an item"},
        {id: "2", text: "Also this"}
    ]);
    return(
        <div>
            <textarea id="textarea"></textarea>
            <button onClick ={()=>setItems(prevItems => prevItems.concat({id: prevItems.id +1, text: document.getElementById("textarea").value}))}></button>
            <MyList header={"Header"} items = {items}/>
        </div>
    )
}
export default MyContainer