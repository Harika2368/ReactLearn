import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

export class ComponentE extends Component {
    static contextType=UserContext
    render() {
        return (
            <div>
                {/* in the render() method context vlaue is available as this.context  */}
                Component E context : {this.context}
                <ComponentF/>
            </div>
        )
    }
}

export default ComponentE

//assign userContext to the context type property on the class
// ComponentE.contextType=UserContext

//Limitations for context type

//Works only with class component
//you can subsribe only to one single context using context type
//many a times in your application you need to read more than 
//one context in which scenario the consumer component is the way to go
