import React, { Component } from 'react'
import { LifeCycleB } from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'CGG'
        }
        console.log('LifeCycleA constructor')
    }
    //return new state or null
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleA componetDidUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'Welcome to CGG'
        })
    }
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                LifeCycle A
                <button onClick={this.changeState}>changeState</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
