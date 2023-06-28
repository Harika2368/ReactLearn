import React from 'react'

export const ChildComponet = (props) => {
    return (
        <div>
            <button onClick={()=>props.greetHandler('CGG')}>Greet Parent</button>
        </div>
    )
}
