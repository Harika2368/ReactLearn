import React from 'react'
import { ChildComponet } from './ChildComponet'

export const ParentComponent = () => {
    const greetParent=(childName)=>alert(`Hello Parent ${childName}`)
    return (
        <div>
            <ChildComponet greetHandler={greetParent}/>
        </div>
    )
}
