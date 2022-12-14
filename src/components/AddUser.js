import React from 'react';
import { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({});
    const handelAddUser = event=>{
        event.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('User added successfully');
                event.target.reset();
            }
        })
    };

    const handelInputBlur = event =>{
        const value = event.target.value;
        const field = event.target.name;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser)
    }
    return (
        <div>
            <h2>Please add a new user</h2>

            <form onSubmit={handelAddUser}>
                <input onBlur={handelInputBlur} type="text" name="name" placeholder='name' id="" required/>
                <br />
                <input onBlur={handelInputBlur} type="email" name="email" placeholder='email' id="" required/>
                <br />
                <input onBlur={handelInputBlur} type="text" name="address" id="" placeholder='address'/>
                <br /> <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;