import React,{useState} from 'react'

const OnSubmitEvent = () => {
    const [formdata,setformdata]=useState({
        name:"",
        email:"",
        password:"",
    });
    
    function click(event){
        setformdata({
            ...formdata,
            [event.target.name]:event.target.value,

        })
    }

    const [submitform,setsubmitform]=useState(null);

    function onsubmit(event){
        event.preventDefault();
        setsubmitform(formdata);

        setformdata({
        name:"",
        email:"",
        password:"",
    });
    }

   return (
    <div>
        <form onSubmit={onsubmit}>
            <input type="text" name="name" value={formdata.name} placeholder="Enter ur name..." onChange={click} required></input>
            <input type="email" name="email" value={formdata.email} placeholder='enter your email...' onChange={click} required></input>
            <input type="password" name="password" value={formdata.password} placeholder='enter your password...' onChange={click} required></input>
            <button type='submit'>Submit</button>
        </form>
        <div>
            {
                submitform && (
                    <div>
                        <h3>Name:{submitform.name}</h3>
                        <h3>Email:{submitform.email}</h3>
                        <h3>Password:{submitform.password}</h3>
                    </div>
                )
            }
        </div>
    </div>
)
}

export default OnSubmitEvent