import React from 'react'

const LocalStorage = () => {
    localStorage.clear();

    localStorage.setItem("name","Dinesh")
    localStorage.setItem("age","21")

    const get=localStorage.getItem("name")
    console.log(get);

    localStorage.removeItem("age")

    const user={
        name:"Kumar",
        age:19
    }
    localStorage.setItem("user",JSON.stringify(user))

    const user1=JSON.parse(localStorage.getItem("user"))
    console.log(user1.name);
  return (
    <div>LocalStorage</div>
  )
} 

export default LocalStorage