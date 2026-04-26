import React,{useState} from 'react'

const Liststate = () => {
    const [items,setitems]=useState(["Banana","Apple"])
    const [input,setinput]=useState("");

    function addItem(){
        setitems([...items,input]);
        setinput("");
    }

    const removeitem=(index)=>{
        const newarray=[...items];
        newarray.splice(index,1);
        setitems(newarray);
    }
  return (
    <div>
        {
            items.map((item,index)=>(
                <div key={index}>
                    <h2>
                    {item}
                </h2>
                <button onClick={()=>removeitem(index)}>Remove Item</button>
                </div>
            ))
        }
        <input type="text" placeholder='Enter your items...' value={input} onChange={(e)=>setinput(e.target.value)}/>
        <button onClick={addItem}>Add Item</button>
    </div>
  )
}

export default Liststate