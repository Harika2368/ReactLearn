import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
        //1.
        this.cbRef=null
        //2.
        this.setCbRef=element=>this.cbRef=element

    }
    //what exactly does this.inputRef holds
    //inputRef hold an object aftr the references created
    //current points to the actual dom mode

    componentDidMount(){
        // console.log(this.inputRef)
        // this.inputRef.current.focus()
        //*********************************************************** */
        // react will call the ref callback with dom element when the dom eement when the component mounts
        //with null when component unmounts
        //3.
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                {/* 4. */}
                <input type='text' ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

//refs makes it possible to accesds dom needs directly within react.
//common use case focussing a text input

//as soon as page loads the input field should get focus
//using refs this can be done in three simple steps
//1.create a ref - React.createRef(). Common to create ref in constructor
//so that they can be referenced throughout the application
//2.attach this ref to the input element int the render method and to attach ref we make use off the reserved ref attribute
//we now have reference to the input element
//3.to call focus() method on this input element
//new process**************************************************
// export class RefDemo extends Component {
//     constructor(props) {
//         super(props)
//         this.inputRef=React.createRef()

//     }
//     componentDidMount(){
//         console.log(this.inputRef)
//         this.inputRef.current.focus()
//     }
//     clickHandler=()=>{
//         alert(this.inputRef.current.value)
//     }
//     render() {
//         return (
//             <div>
//                 <input type='text' ref={this.inputRef}/>
//                 <button onClick={this.clickHandler}>Click</button>
//             </div>
//         )
//     }
// }