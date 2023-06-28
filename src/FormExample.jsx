import React, { useState } from 'react'

export const FormExample = () => {
    const [username,setUsername] = useState(' ')
    const submitHandler=(event)=>{
        event.preventDefault()
        alert(`Form Data is ${username}`)
    }
    return (
        <form onSubmit={submitHandler}>
        <div>
            <label>Username</label>
            <input type='text' value={username} onChange={(event)=>setUsername(event.target.value)}/>
        </div>
        <button type='submit'>Submit</button>
    </form>
    )
}
