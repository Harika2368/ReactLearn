//JSX
import React from 'react'
export const Hello=()=>{
    // return(
    //     <div id="hello" className="dummyClass">
    //         <h1>Hello CGG with JSX</h1>
    //     </div>
    // )

    return React.createElement('div',{id:'hello',className:"dummyclass"},React.createElement('h1',null,'Hello CGG without JSX'))

}