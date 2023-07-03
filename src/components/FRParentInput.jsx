import React, { Component } from 'react'
import { ForwardingRef } from './ForwardingRef'

export class FRParentInput extends Component {
    constructor(props) {
        super(props)
        //1.
        this.inputRef=React.createRef()
    }
    clickHandler=()=>{
        //ref points to native input element
        // not to forwardref instance
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                {/* 2. */}
                <ForwardingRef ref={this.inputRef}/>
                {/* 4. */}
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}
