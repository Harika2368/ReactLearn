//ccc
import React, { Component } from 'react'

class Counter extends Component {
    //crc
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment(){
        //this.state.count=this.state.count+1
        // this.setState({
        //     count:this.state.count+1
        // },()=>console.log('Callback Value ',this.state.count))
        //1.never try to update state directilt,use setState
        //2.give two arguments to setSate(callback)
        //3.

        this.setState(prevState=>({
            count:prevState.count+1
        }),()=>console.log('Callback Value ',this.state.count))
        console.log(this.state.count)
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()  
      }
    
    // render() {
    //     return (
    //         <div>
    //             <h1>Count - {this.state.count}</h1>
    //             <button onClick={()=>this.incrementFive()}>Increment</button>
    //         </div>
    //     )
    // }
    render() {
        const {count} =this.state
        return (
            <div>
                <h1>Count - {count}</h1>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
