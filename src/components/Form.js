// import React, { useState } from 'react'

// export const Form = () => {
//     const [username,setUsername] = useState(' ')
//     const submitHandler=(event)=>{
//         event.preventDefault()
//     }
//     return (
//         <form onSubmit={submitHandler}>
//             <div>
//                 <label>Username</label>
//                 <input type='text' value={username} onChange={(event)=>setUsername(event.target.value)}/>
//             </div>
//             <button type='submit'>Submit</button>
//         </form>
       
//     )
// }

//capture inut from input element and have the data
//available for form submission
//manage with react
//1.create state variable to handle the value and change the value of input tihs element
//2.assign username to value attribute
//3.handling  onchange event,
//automatically receive change event as an argument use it to update usernAme variable 
//,keep track of changes to username
//submit form data
//click on submit button pagerefreshes,form has default html form behavior of browsing to a new page when the submit button is clicked
//A common approach however is to execute a javascript function that  handles submiddion of form and that form will have access the data the user entered into the form