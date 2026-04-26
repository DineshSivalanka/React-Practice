import React from 'react'

const List = () => {
    const users=[{
        id:101,
        name:"Dinesh",
    },{
        id:102,
        name:"leela",
    },{
        id:"103",  
        name:"bala",
    }];
  return (
    <div>
        {
            users.map((user)=>(
                <div key={user.id}>{user.id}-{user.name}</div>
            ))
        }
    </div>
  )
}

export default List