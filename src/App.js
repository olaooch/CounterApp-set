import React,{useState} from "react"

import "./App.css"

function App() {

  const [add, setAdd] = useState(0);

   function plus(){
      setAdd(add +1)
   }
    
   const Minus = () =>{
     setAdd(add -1)

   }
   
  return (
    <div className="Main_Container">
      <div className="Holder">
        <button onClick={Minus}>-</button>
        <h2>{add}</h2>
        <button onClick={plus}>+</button>

      </div>
     </div> 

  )


}

export default App