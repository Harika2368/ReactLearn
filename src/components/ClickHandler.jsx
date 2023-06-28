import React from 'react'

//Event handling
//call the function or call the function call or within function using event

export const ClickHandler = () => {
    const clickHandler=(event,count=1)=>console.log('Button clicked',event,count)
    return (
        <div>
    <button onClick={clickHandler}>Click</button> 
    <button onClick={(event)=>clickHandler(event,5)}>Click5</button>        
</div>
        
    )
}
{/* 
const clickHandler=()=>console.log('Button clicked')
<div>
   <button onClick={clickHandler}>Click</button>
 </div> */} 

{/* <div>
<button onClick={()=>clickHandler()}>Click</button>
</div> */}